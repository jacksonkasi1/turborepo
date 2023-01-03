import { useStore } from "./store"

function Controls() {
  const count = useStore((state) => state.count)
  const inc = useStore((state) => state.inc)

  const hanelInc = () => {
    inc({
      count: count+1,
      name:"kas1i"
    })
  }

  return <button onClick={hanelInc}>one up</button>
}

function Counters() {
  const {count, name} = useStore((state) => state)
  return <h1>{count} + {name}</h1>
}

export const Counter = () => {
  return (
    <>
      <Controls />
      <Counters />
    </>
  )
}
