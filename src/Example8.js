import { memo } from "react"

function Example8() {

    console.log("re-render")

    return (
        <div>
            <h3>Demo useMemo() - dont re-render unchanged props of child component</h3>
        </div>
    )
}

export default memo(Example8)