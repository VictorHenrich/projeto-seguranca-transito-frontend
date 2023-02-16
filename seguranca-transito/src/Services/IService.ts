


export default interface IService<T, TR = void>{
    execute(props: T): Promise<TR> | TR
}