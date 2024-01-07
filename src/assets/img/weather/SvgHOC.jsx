export const SvgHoc = (OriginalComponent) => {
    const NewComponent = props => {
        const newProps = {
            width: '40px',
            height: '40px',
            ...props
        }
        return <>
            <OriginalComponent {...newProps} />
        </>
    }
    return NewComponent
}