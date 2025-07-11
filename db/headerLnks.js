import Home from "@icons/home.svg";
import Store from "@icons/store.svg";
import Users from "@icons/users.svg";
import People from "@icons/people.svg";
import Seller from "@icons/Webinar2.svg";
import Workshop from "@icons/workshop.svg";
import SearchOrder from "@icons/Quiz.svg";
import Library from "@icons/books.svg";
import Contact from "@icons/vector.svg";

const links = [
    {link: '/', icon: <Home/>, text: 'آموزشگاه', underMenu: false},
    {link: 'https://store.lingomasters.ir', icon: <Store/>, text: 'فروشگاه', underMenu: false},
    {
        link: '',
        icon: <Users/>,
        text: 'کلاس‌های‌خصوصی',
        underMenu: true,
        items: null
    },
    {link: '/group-class', icon: <People/>, text: 'کلاس‌های‌گروهی', underMenu: false},
    {
        link: '/webinar',
        icon: <Seller/>,
        text: 'وبینارها',
        items:null
    },
    {
        link: '/workshop',
        icon: <Workshop/>,
        text: 'ورکشاپ ها',
        items:null
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
    {link: '/library', icon: <Library/>, text: 'کتابخانه', underMenu: false},
    // {link: '/about-us', icon: <About/>, text: 'درباره‌ما', underMenu: false},
    {link: '/contact-us', icon: <Contact/>, text: 'تماس‌با‌ما', underMenu: false},
]
export default links;