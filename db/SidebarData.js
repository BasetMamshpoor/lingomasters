import Dashboard from '@icons/elements.svg'
import Wallet from '@icons/wallet.svg'
import Receipt from '@icons/receipt.svg'
import BookOpen from '@icons/book-open.svg'
import Books from '@icons/books.svg'
import Chats from '@icons/chats.svg'
import Badge from '@icons/badge.svg'
import Laptop from '@icons/laptop.svg'
import Vector from '@icons/vector.svg'
import File from '@icons/file.svg'

const sidebarItems = [
    {
        id: 1,
        title: 'داشبورد',
        icon: Dashboard,
        href: '/profile/'
    },
    {
        id: 2,
        title: 'کلاس‌ها',
        icon: BookOpen,
        href: null,
        subMenu: [
            {id: 1, title: 'وبینارها', href: '/profile/classes/webinar'},
            {id: 2, title: 'ورکشاپ‌ها', href: '/profile/classes/workshop'},
            {id: 3, title: 'کلاس‌های گروهی', href: '/profile/classes/group'},
            {id: 4, title: 'کلاس‌های خصوصی', href: '/profile/classes/private'},
            {id: 5, title: 'نتایج آزمون‌های کلاسی', href: '/profile/classes/exams'},
        ],
        key: 'classes'
    },
    {
        id: 3,
        title: 'کتاب‌ها',
        icon: Books,
        href: null,
        subMenu: [
            {id: 2, title: 'کتاب‌های رایگان', href: '/profile/books/free'},
            {id: 3, title: 'کتاب‌های خریداری شده ', href: '/profile/books/payed'},
        ],
        key: 'books'
    },
    {
        id: 4,
        title: 'آزمون‌ها',
        icon: File,
        href: null,
        subMenu: [
            {id: 1, title: 'آزمون پلاس', href: '/profile/exams/plus'},
            {id: 2, title: 'آزمون پرداخت', href: '/profile/exams/pay'},
            {id: 3, title: 'آزمون تعیین سطح', href: '/profile/exams/level'},
            {id: 4, title: 'نتایج آزمون‌های من', href: '/profile/exams/results'},
        ],
        key: 'exams'
    },
    {
        id: 5,
        title: 'گواهینامه‌ها',
        icon: Badge,
        href: '/profile/certificate',
    },
    {
        id: 6,
        title: 'کیف پول',
        icon: Wallet,
        href: '/profile/wallet'
    },
    {
        id: 7,
        title: 'گزارشات',
        icon: Receipt,
        href: '/profile/reports'
    },
    {
        id: 8,
        title: 'نظرات',
        icon: Chats,
        href: '/profile/feedback'
    },
    {
        id: 9,
        title: 'پشتیبانی',
        icon: Vector,
        href: '/profile/support'
    },
    // {
    //     id: 10,
    //     title: 'راهنمای کلاس‌ها',
    //     icon: Laptop,
    //     href: '/profile/guide'
    // }
];
export {sidebarItems};