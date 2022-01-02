interface ErrorMessage {
    formError?: object;
    apiError?: string | Error;
}

interface Error {
    error: {
        errorId: string;
        message: string;
        statusCode: number;
        supportCode: string;
        time: string;
    };
}

export const errorMessage = ({ formError }: ErrorMessage = {}): string => {
    const formErrorExists = formError && Object.keys(formError).length > 0;

    let formErrors = Object.values(formError || []);

    const isArrayOfArrays = Array.isArray(formErrors[0]);

    if (isArrayOfArrays) {
        const newErrors = formErrors.flat();
        formErrors = Object.values(newErrors[0]);
    }

    const formErrorsFiltered = formErrors.filter((item) => item.value);

    const formErrorsFilteredArray = formErrorsFiltered.map((item) => {
        return item.value;
    });

    const errorsArray = [...formErrors, ...formErrorsFilteredArray];

    const errorsArrayFiltered = errorsArray.filter((item) => !item.value);

    if (formErrorExists) {
        const firstError = errorsArrayFiltered.map((item) => item.message);
        return firstError[0];
    }
    return '';
};
