interface User {
    name: string;
    email: string;
    // optional
    phones?: {
        home?: { num: string };
        office?: { num: string };
        mobile?: { num: string };
    };
}

var kim: User = {
    name: '김철수',
    email: 'kim@gmail.com',
    phones: {
        home: { num: '031...' },
        mobile: { num: '010...' }
    }
};

var lee: User = {
    name: '이영희',
    email: 'lee@gmail.com',
    phones: {
        office: { num: '02...' },
        mobile: { num: '010...' }
    }
};

console.log(kim, lee);
