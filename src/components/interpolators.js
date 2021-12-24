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
        if (proportion > 2.1 && proportion <= 2.7) {
            // google interpolation formula to understand this.
            return { 'transform': `translateX(${100*(5.4-2*proportion)}%)` }
        }
    }

}

export const educationSectionInterpolator = {

    title(proportion) {
        if (proportion > 2.5 && proportion <= 3) {
            // console.log('here', { 'transform': translateX(100 - ((proportion - 2.2) * 0.01) % ) });
            return { 'transform': `translateX(${250*(3-proportion)}%)` }

        }
    }

}
export const workExperienceSectionInterpolator = {

    title(proportion) {
        if (proportion > 2.75 && proportion <= 3.3) {
            return { 'transform': `translateX(${222.2*(3.3-proportion)}%)` }

        }
    }

}
export const contactSectionInterpolator = {

    title(proportion) {
        if (proportion > 2.41 && proportion <= 3.95) {
            return { 'transform': `translateX(${227.27*(3.95-proportion)}%)` }

        }
    }

}