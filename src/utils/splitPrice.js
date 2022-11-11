export const splitPrice = (number = 0) => {
    const splitedNumberBySpaces = []

    if (number) {
        number = number.toString()

        if (typeof number === 'string') {
            number = number.split('').reverse()

            for (let i = 0; i < number.length; i++) {
                if (i % 3 === 0) {
                    splitedNumberBySpaces.push(' ')
                }
                splitedNumberBySpaces.push(number[i])
            }

            return splitedNumberBySpaces.reverse().join('')
        }
    }
    return console.error('Function did not detect a Number as Argument')
}