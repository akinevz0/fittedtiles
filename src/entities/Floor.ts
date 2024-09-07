import type { Size, Position } from './Geometry.ts'

type FloorSize = Size
type InsetSize = Size
type InsetPosition = Position
type HoleSize = Size
type HolePosition = Position

interface FloorInset {
    size: InsetSize
    pos: InsetPosition
}

interface FloorHole {
    size: HoleSize
    pos: HolePosition
}

type FloorInsets = FloorInset[]
type FloorHoles = FloorHole[]

type FloorProps = FloorSize & {
    insets: FloorInsets
    holes: FloorHoles
}

class Floor {
    height: number
    width: number
    insets?: FloorInset[]
    holes?: FloorHole[]

    constructor({ width, height, insets, holes }: FloorProps) {
        this.width = width
        this.height = height
        this.insets = insets
        this.holes = holes
    }
}

export default Floor;