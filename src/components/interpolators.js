export const welcomeSectionInterpolator = {

    topText(proportion) {
        if (proportion < 1.4) {
            return { 'animation-delay': `calc(${proportion} * -1.5s)` };
        } else {
            return {
                opacity: (1.9 - proportion) * 2,
                'animation-delay': `calc(${proportion} * -1.5s)`,
                'transform': `scale(${proportion} - 4)`,
            };
        }
    },
    bottomText(proportion) {
        if (proportion > 1 && proportion < 1.8) {
            return { 'animation-delay': `calc(${proportion - 1} * -1s)` };
        } else if (proportion > 1.8) {
            return {
                'animation-delay': `calc(${proportion - 1} * -1s)`
            };
        }
    }

}

export const secondSectionInterpolator = {

    highlights(proportion) {

        if (proportion > 2 && proportion < 4) {
            return { 'animation-delay': `calc(${proportion-2} * -1.5s)` };
        } else if (proportion > 2.4) {
            return {
                'animation-delay': `calc(${proportion-2} * -1.5s)`,
            };
        }
    },
    bottomText(proportion) {
        if (proportion > 1 && proportion < 2.4) {
            return { 'animation-delay': `calc(${proportion - 1} * -1s)` };
        } else if (proportion > 2.4) {
            return {
                opacity: (1.8 - proportion) * 2,
                transform: `scaleX(${proportion})`,
                'animation-delay': `calc(${proportion * -2})`,
            };
        }
    }
}

export const skillsSectionInterpolator = {

    title(proportion) {
        if (proportion > 2.2 && proportion <= 2.7) {
            // console.log('here', { 'transform': translateX(100 - ((proportion - 2.2) * 0.01) % ) });
            return { 'transform': `translateX(${100*(5.4-2*proportion)}%)` }

        }
    }

}