const validateFacilitiesPostParam = [
	check('id').notEmpty(),
	check('name').notEmpty(),
]

export default validateFacilitiesPostParam;