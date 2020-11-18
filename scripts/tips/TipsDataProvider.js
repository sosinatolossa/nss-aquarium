

const tipsCollection = [
    {
        tipIdea: "Clean your fish tank at least once a week."
    },

    {
        tipIdea: "Make sure you take out the fishies while cleaning tank."
    },

    {
        tipIdea: "Don't use strong tank cleaning soap."
    }
]



export const useTip = () => {
    return tipsCollection.slice()
}