const featureFlagConfig = {
    development: {

        projectA: {
            newUI: true,
            betaFeature: false
        },
        projectB: {
            newUI: false,
            betaFeature: false
        }

    },
    production: {

        projectA: {
            newUI: true,
            betaFeature: false
        },
        projectB: {
            newUI: false,
            betaFeature: false
        }

    }


}
module.exports = featureFlagConfig