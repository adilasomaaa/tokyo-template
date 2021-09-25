export default [
    {
        title: 'Menu',
        children: [
            {
                name: 'Dashboard',
                icon: 'fas fa-th-large',
                link: '/dashboard',
            },
            {
                name: 'Typography',
                icon: 'fas fa-quote-right',
                link: '/typography'
            },
            {
                name: 'Components',
                icon: 'fas fa-layer-group',
                slug: 'components',
                subItem: [
                    {
                        name: 'Alert',
                        link: '/components/alert'
                    },
                    {
                        name: 'Badge',
                        link: '/components/badge'
                    },
                    {
                        name: 'Breadcumb',
                        link: '/components/breadcumb'
                    },
                    {
                        name: 'Button',
                        link: '/components/button'
                    },
                    {
                        name: 'Card',
                        link: '/components/card'
                    },
                    {
                        name: 'Carousel',
                        link: '/components/Carousel'
                    },
                    {
                        name: 'Modal',
                        link: '/components/modal'
                    },
                    {
                        name: 'Pagination',
                        link: '/components/pagination'
                    },
                ]
            },
        ]
    },
    {
        title: 'Form & Table',
        children: [
            {
                name: 'Table',
                icon: 'fas fa-th-large',
                link: '/table',
            },
            {
                name: 'Form Layout',
                icon: 'fas fa-bars',
                link: '/components/form-layout'
            },
            {
                name: 'Form Elements',
                icon: 'fas fa-layer-group',
                slug: 'form-elements',
                subItem: [
                    {
                        name: 'Input',
                        link: '/components/input'
                    },
                    {
                        name: 'Select',
                        link: '/components/select'
                    },
                    {
                        name: 'Radio',
                        link: '/components/radio'
                    },
                    {
                        name: 'Checbox',
                        link: '/components/checkbox'
                    },
                    {
                        name: 'Textarea',
                        link: '/components/textarea'
                    },
                ]
            },
        ]
    },
    {
        title: 'Widget',
        children: [
            {
                name: 'Chart',
                icon: 'fas fa-chart-bar',
                link: '/widget/chart',
            },
            {
                name: 'Notification',
                icon: 'fas fa-bell',
                slug: 'notification',
                subItem: [
                    {
                        name: 'Toast',
                        link: '/widget/toast'
                    },
                    {
                        name: 'Sweet Alert',
                        link: '/widget/sweet-alert'
                    },
                ]
            },
        ]
    },
    {
        title: 'Pages',
        children: [
            {
                name: 'Authentication',
                icon: 'fas fa-key',
                slug: 'auth',
                subItem: [
                    {
                        name: 'Login',
                        link: '/auth/login'
                    },
                    {
                        name: 'Register',
                        link: '/auth/register'
                    },
                ]
            },
        ]
    }
]