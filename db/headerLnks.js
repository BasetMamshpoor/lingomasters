import Home from "@icons/home.svg";
import Store from "@icons/store.svg";
import Users from "@icons/users.svg";
import Book from "@icons/book-open.svg";
import Seller from "@icons/seller.svg";
import SearchOrder from "@icons/file.svg";
import Library from "@icons/books.svg";
import About from "@icons/about.svg";
import Contact from "@icons/vector.svg";

const links = [
    {link: '/', icon: <Home/>, text: 'صفحه‌اصلی', underMenu: false},
    {link: 'https://store.lingomasters.ir', icon: <Store/>, text: 'فروشگاه', underMenu: false},
    {
        link: '',
        icon: <Users/>,
        text: 'کلاس‌های‌خصوصی',
        underMenu: true,
        items: null
    },
    {link: '/group-class', icon: <Book/>, text: 'کلاس‌های‌گروهی', underMenu: false},
    {
        link: '',
        icon: <Seller/>,
        text: 'وبینارها',
        underMenu: true,
        items: [{link: '/webinar', text: 'وبینار'}, {link: '/workshop', text: 'ورکشاپ'}]
    },
    {
        link: '',
        icon: <SearchOrder/>,
        text: 'آزمون ها',
        underMenu: true,
        items: [
            {link: '/exams/placement', text: 'آزمون تعیین سطح'},
            {link: '/exams/pay', text: 'آزمون پرداخت'},
            {link: '/exams/plus', text: 'آزمون پلاس'}
        ]
    },
    {link: '/', icon: <Library/>, text: 'کتابخانه', underMenu: false},
    {link: '/', icon: <About/>, text: 'درباره‌ما', underMenu: false},
    {link: '/', icon: <Contact/>, text: 'تماس‌با‌ما', underMenu: false},
]
export default links;