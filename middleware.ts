/* eslint-disable consistent-return */
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, type NextMiddleware, type NextRequest } from 'next/server'
import { i18n } from './dictionaries/i18n-config'

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}

    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value
    })

    const locales: string[] = [...i18n.locales]

    // Use negotiator and intl-localematcher to get best locale
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

    const locale = matchLocale(languages, locales, i18n.defaultLocale)

    return locale
}

export const middleware: NextMiddleware = async (request: NextRequest) => {
    const { pathname, search } = request.nextUrl

    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    if (
        [
            '/robots.txt',
            '/favicon.ico',
            // Your other files in `public`
        ].includes(pathname)
    )
        return

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    )


    // Redirect if there is no locale (but skip for API routes)
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${search}`, request.url),
        )
    }
}

export const config = {
    // Update matcher to include API routes
    matcher: ['/((?!_next/static|_next/image|favicon.ico|svg|image|assets).*)'],
}
