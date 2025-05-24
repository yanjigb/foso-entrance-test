import { ISubCategoryList } from "../types/sub-categories";
import { randomId } from "../utils/random";

export const MockCategory: (
    ISubCategoryList &
    {
        key: string
    }
)[] = [
        {
            key: randomId(),
            image: '/images/oil-filter-category-logo.png',
            altText: 'oil-filter-category-logo',
            title: 'Bộ lọc dầu',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/air-filter-category-logo-v3.png',
            altText: 'air-filter-category-logo-v3',
            title: 'Bộ lọc không khí',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/fuel-filter-category-logo.png',
            altText: 'fuel-filter-category-logo',
            title: 'Bộ lọc nhiên liệu',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/filter-in-cabin-category-logo.png',
            altText: 'filter-in-cabin-category-logo',
            title: 'Bộ lọc trong cabin',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/air-filter-category-logo-v2.png',
            altText: 'air-filter-category-logo-v2',
            title: 'Bộ lọc không khí',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/filter-in-cabin-category-logo-v2.png',
            altText: 'filter-in-cabin-category-logo-v2',
            title: 'Bộ lọc trong cabin',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/fuel-filter-category-logo-v2.png',
            altText: 'fuel-filter-category-logo-v2',
            title: 'Bộ lọc nhiên liệu',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
        {
            key: randomId(),
            image: '/images/air-filter-category-logo.png',
            altText: 'air-filter-category-logo',
            title: 'Bộ lọc không khí',
            products: [
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
                { title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)', price: 290000, image: '/images/air-filter-1.png', altText: '', href: '/' },
            ]
        },
    ]