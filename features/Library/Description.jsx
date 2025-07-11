//icons
import Book from '@icons/book.svg';
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg';
import Note from '@icons/note-2.svg';
import Age from '@icons/growth.svg';
import Star from '@icons/star.svg';
import File from '@icons/file.svg';

const Description = ({product = {}}) => {
    const {Dimensions, Paper_type, Cover_type, fipa_number, shabak_number} = product
    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                id='desc'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Book className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>درباره کتاب</span>
                </div>
                <ul className="flex flex-col gap-4">
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <div className="col-span-2 flex items-center gap-2">
                            <Flag className="lg:w-5 w-4"/>
                            <span className='text-natural_gray-950'>زبان کتاب</span>
                        </div>
                        <span className="col-span-3">{Dimensions}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <div className="col-span-2 flex items-center gap-2">
                            <Note className="lg:w-5 lg:h-5 w-4 h-4  "/>
                            <span className='col-span-2 text-natural_gray-950'>تعداد جلد</span>
                        </div>
                        <span className="col-span-3">{Cover_type}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <div className="col-span-2 flex items-center gap-2">
                            <Age className="lg:w-5 lg:h-5 w-4 h-4 fill-primary-600"/>
                            <span className='col-span-2 text-natural_gray-950'>/گروه سنی</span>
                        </div>
                        <span className="col-span-3">{Paper_type}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <div className="col-span-2 flex items-center gap-2">
                            <Star className="lg:w-5 lg:h-5 w-4 h-4 fill-primary-600"/>
                            <span className='col-span-2 text-natural_gray-950'>سطح کتاب</span>
                        </div>
                        <span className="col-span-3">{shabak_number}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <div className="col-span-2 flex items-center gap-2">
                            <File className="lg:w-5 lg:h-5 w-4 h-4 fill-primary-600"/>
                            <span className='col-span-2 text-natural_gray-950'>مباحث کتاب</span>
                        </div>
                        <span className="col-span-3">{fipa_number}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Description;