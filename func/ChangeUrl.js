export const changeUrl = (router, name, value) => {
    let str = Array.isArray(value)
        ? value.map((f) => (typeof f === 'object' ? f.value : f)).join('-')
        : value;

    const { slug, ...query } = router.query;

    if (!str) {
        const { [name]: removed, ...rest } = query;
        router.replace(
            {
                pathname: router.asPath.split('?')[0],
                query: { ...rest },
            },
            undefined,
            { shallow: true }
        );
    } else {
        router.replace(
            {
                pathname: router.asPath.split('?')[0],
                query: { ...query, [name]: str },
            },
            undefined,
            { shallow: true }
        );
    }
};
