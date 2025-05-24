'use client'

import { LocaleKeys } from "@/@types/locales"
import { IBreadcums } from "@/share/types/breadcums"
import { RouteNames } from "@/share/types/route-names"
import { Breadcrumb } from "antd"
import { ChevronRight } from "lucide-react"

interface Props {
    routeList: IBreadcums[]
    dictionary: LocaleKeys
}

function AppBreadcums(props: Props) {
    const { routeList, dictionary } = props

    return (
        <Breadcrumb separator={<ChevronRight size={22} />}>
            {/* {
                routeList.map(item => (
                    <Breadcrumb.Item key={item.path} href={item.path}>{item.name}</Breadcrumb.Item>
                ))
            } */}

            <Breadcrumb.Item href={RouteNames.HOME}>{dictionary.Home}</Breadcrumb.Item>
            <Breadcrumb.Item href={RouteNames.PRODUCT} className="!text-brand/600">{dictionary.Product}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default AppBreadcums