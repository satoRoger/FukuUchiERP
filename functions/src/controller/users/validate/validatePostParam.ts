import { check } from 'express-validator';

const validateUsersPostParam = [
    check("rollType").notEmpty(),
    check("mail").notEmpty(),
    check("familyName").notEmpty(),
    check("givenName").notEmpty(),
    check("birthdate").isISO8601(),
    check("hireDate").isISO8601(),
    check("leaveDate").isISO8601()
    ];

export default validateUsersPostParam;