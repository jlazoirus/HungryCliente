import * as React from 'react'
import { View, Dimensions } from 'react-native';
import { Carousel } from 'nachos-ui';

const screen_width = Dimensions.get("window").width;
const images = [
    `https://placehold.it/${screen_width}/311112`,
    `https://placehold.it/${screen_width}/59C480`,
    `https://placehold.it/${screen_width}/546C80`,
];


export function Gallery ({ images, height, width })  {

    return (
        <View style={{width: width, height: height}}>
            <Carousel
                width={width}
                height={height}
                images={images}
            />
        </View>
    )
}

(Gallery as any).defaultProps = {
    images: images,
    width: screen_width,
    height: 100
}