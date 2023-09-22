import { Box } from '@mui/material'
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ images }: { images: string[] }) => {
    const [selectedImg, setSelectedImg] = useState(0);

    const handleChoose = (index: number) => {
        setSelectedImg(index);
    }

    const secondaryBorder = "2px solid #e6e6e6";
    const primaryBorder = "2px solid #ed6c02"

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: '1.5rem'
        }}>
            <Image
                src={images[selectedImg]}
                alt="product"
                width={375}
                height={375}
                layout="responsive"
                objectFit="cover"
                style={{
                    border: secondaryBorder,
                    borderRadius: "5px",
                    aspectRatio: "1 / 1"
                }}
            />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        style={{
                            border: selectedImg === index ? primaryBorder : secondaryBorder,
                            borderRadius: '5px',
                            cursor: 'pointer',
                            maxWidth: '80px',
                            maxHeight: '80px',
                            width: 'calc(100% / 5)',
                            aspectRatio: '1 / 1'
                        }}
                        src={image}
                        onClick={() => handleChoose(index)}
                        alt="product"
                        width={80}
                        height={80}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Gallery;