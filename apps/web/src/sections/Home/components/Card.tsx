import { navigation } from "../../../routes/navegation"
import ElectricIcon from '../../../icons/Electric';

export const Card = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-[720px]mx - auto">
                < div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]" >
                    <a
                        target="_blank"
                        href="https://github.com/alejandroaguilardev/ree"
                        className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
                    >
                        visita el repositorio en <b>alejandroaguilardev</b>.
                    </a>
                </div >

                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="p-6">
                        <ElectricIcon className="w-10" />
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Balance Eléctrico - REE
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Este proyecto tiene como objetivo obtener datos en tiempo real desde la API pública de REE (Red Eléctrica de España) sobre el Balance Eléctrico, incluyendo información sobre la generación, demanda, importaciones/exportaciones, y más.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href={navigation.balance} className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Dashboard
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}
