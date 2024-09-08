import { ReactNode } from 'react'
import './Card.css'

interface Props {
    title?: string
    children?: ReactNode[] | ReactNode
}

export default function Card({ title, children }: Props): ReactNode {

    return <>
        <div className='card'>
            <div>
                {(title ? <div className='title'>{title}</div> : undefined)}
                {(children ? <div className='content'> {children} </div> : undefined)}
            </div>
        </div>
    </>
}