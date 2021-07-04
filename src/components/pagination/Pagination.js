export const Pagination = ({children, totalPages, currPage, nextPage, prevPage}) => {
    return (
        <div>
            <div>
                <button onClick={ () => {
                    prevPage()
                } }>prevPage
                </button>

                <span>{ currPage } of { totalPages }</span>

                <button onClick={ () => {
                    nextPage();
                } }>nextPage
                </button>
            </div>
            { children }
        </div>
    );
};


