const getRandomProfileImage = () => {
    let gender;

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            gender = 'men';
            break;

        case 1:
            gender = 'women';
            break;

        case 2:
            gender = 'lego';
            break;

        default:
            gender = 'lego';
            break;
    }

    const variantCount = gender === 'lego' ? 9 : 99;
    const variant = Math.floor(Math.random() * variantCount);

    return `https://randomuser.me/api/portraits/${gender}/${variant}.jpg`;
};

export { getRandomProfileImage };
