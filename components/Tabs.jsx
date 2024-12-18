const Tabs = ({ list = [] }) => {
    return (
        <>
            <div className="border bg-white">
                <ul className="flex items-center [&>li]:grow overflow-x-auto scrollbar-hide">
                    
                    {list.map((l, i) => (
                        <li key={l.id}>
                            <a className={`whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent border-b-2 ${i == 0 ? 'border-primary-800' : ''}`} href={`#${l.id}`}>
                                {l.n}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Tabs;