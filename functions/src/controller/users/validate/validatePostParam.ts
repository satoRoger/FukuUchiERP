import { check } from 'express-validator';

const validateUsersPostParam = [
    check("rollType").notEmpty(),
    check("mail").notEmpty(),
    check("familyName").notEmpty(),
    check("givenName").notEmpty(),
    check("birthdate").optional().isISO8601(),
    check("hireDate").optional().isISO8601(),
    check("leaveDate").optional().isISO8601(),
    ];

export default validateUsersPostParam;