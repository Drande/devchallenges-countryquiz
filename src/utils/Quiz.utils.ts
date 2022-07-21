import type { CountryData } from "@/models/Country.model"
import type { Quiz } from "@/models/Quiz.model";
import { getRandomElements } from "./Array.utils";

const QuizTypes = [
    {
        type:'capital',
        weight: 2
    },
    {
        type:'flag',
        weight: 1
    }
];

export const buildRandomCountryQuiz = (countries:CountryData[]): Quiz => {
    const randomNumber = Math.random();
    const totalWeight = QuizTypes.reduce((p,c) => p+=c.weight, 0);
    let accum = 0;
    const quizType = QuizTypes.find((t) => {
        if(randomNumber > accum && randomNumber < accum + (t.weight/totalWeight)) {
            return true;
        }
        accum = accum + (t.weight/totalWeight);
        return false;
    });

    let validCountries;
    switch(quizType?.type) {
        default:
        case "capital":
            validCountries = countries.filter(c => c.capital && c.capital?.length > 0);
            break;
        case "flag":
            validCountries = countries.filter(c => c.flags && c.flags?.svg);
            break;
    }

    const numberOfOptions = 4;
    const answerIndex = Math.floor(Math.random() * numberOfOptions);
    const subjects = getRandomElements(validCountries, numberOfOptions);
    const answer = subjects[answerIndex];
    const options =  subjects.map(c => c.name.common);

    return {
        type: quizType?.type!,
        answerIndex: answerIndex,
        options: options,
        data: answer
    }
}