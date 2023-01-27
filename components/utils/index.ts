export function classNames(...args: any[]) {
    return args.filter(Boolean).join(" ");
}

export const titlecase: (str: string) => string = (str: string) => {
    let splitStr = str.toLowerCase().split("_");

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
};
