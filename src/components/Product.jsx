import Button from './Button';

function Product({ val }) {
    return (
        <div className="w-full bg-zinc-900 py-20 text-white">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-8">{val.description}</p>
                    <div className="flex items-center gap-5">
                        {val.live && <Button />}
                        {val.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;