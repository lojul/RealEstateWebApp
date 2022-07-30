import * as yup from 'yup';

export const buildingSchema = yup.object().shape({
    name: yup.string().required(),
    year: yup.number().required(),
    address: yup.string().required(),
    district: yup.string().required(),
    numOfTowers: yup.number().required(),
    numOfUnits: yup.number().required(),
    facilities: yup.string().required(),
    description: yup.string().required(),
    developer: yup.string().required(),
    propertyManagement: yup.string().required(),
})