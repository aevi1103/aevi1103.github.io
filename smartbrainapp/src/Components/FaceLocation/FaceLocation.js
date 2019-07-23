import React from 'react'

const FaceLocation = ({face}) => {

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const bounding_box = face.region_info.bounding_box;

    const box = {
        leftCol: bounding_box.left_col * width,
        topRow: bounding_box.top_row * height,
        rightCol: width - (bounding_box.right_col * width),
        bottomRow: height - (bounding_box.bottom_row * height)
    }

    return (
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    )

}

export default FaceLocation;