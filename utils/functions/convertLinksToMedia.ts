export const convertLinksToMedia = (images: string[], caption: string) => images.map((image, index) => {
    if (index === 0) {
        return {
            'type': 'photo',
            'media': image,
            'caption': caption,
        }
    }

    return {
        'type': 'photo',
        'media': image,
    }
})