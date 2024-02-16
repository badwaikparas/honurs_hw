function Search() {
    return (
        <div id="search" class="_581ebd89 relative flex-auto w-100 w-50-ns pv2-ns order-1-ns order-2">
            <form id="search" method="GET" action="/search"
                class="_13c93d41 relative flex bg-transparent ph3 ph2 pv2 ph0-ns pv0-ns bt b--black-10 bn-ns">
                <div class="e82b10fd relative dde91b96">
                    <div class="_2f299eeb nowrap flex">
                        <span class="_705cdf4f db fl pl3 pr1">
                            <svg width="15px" height="15px"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g stroke="#777777" stroke-width="1.3">
                                        <g>
                                            <path
                                                d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z">
                                            </path>
                                            <path d="M11.4913,11.4913 L17.8683,17.8683"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <input type="search" role="combobox" name="q" hotkeys="[object Object]"
                            placeholder="Search packages" aria-label="Search packages" aria-controls="typeahead-list-80766"
                            aria-expanded="false" aria-activedescendant="" inputref="[object Object]" autocomplete="off"
                            class="_390acbc5 f5 fw3 black relative" value="" element="input">
                        </input>
                    </div>
                </div>
                <button type="submit" class="_0da775bb bn pv2 ph4 f6 white pointer bn pv2 ph4 f6 white pointer"
                    aria-label="Search">Search</button>
                <input type="hidden" aria-hidden="true" name="csrftoken"
                    value="DTr0i82BKZpF8qYiItQcvC4iqs5Q3cKsnBAuP0lL6Kr"></input>
            </form>
        </div>
    );
}

export default Search;