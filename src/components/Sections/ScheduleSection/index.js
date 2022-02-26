import React from 'react';

import './index.scss';


const ScheduleSection = () => {
    
    const dateOpt = {year:'2-digit',month:'2-digit',day: '2-digit'}
    const timeOpt = {hour:'2-digit',minute:'2-digit',hour12:true}
    
    const date001 = new Date( Date.parse('1/16/22 3:00 PM PST'));
    const date002 = new Date( Date.parse('1/23/22 3:00 PM PST'));
    const date003 = new Date( Date.parse('1/29/22 1:00 PM PST'));
    const date004 = new Date( Date.parse('2/6/22 1:00 PM PST'));
    const date005 = new Date( Date.parse('2/12/22 1:00 PM PST'));
    const date006 = new Date( Date.parse('2/20/22 1:00 PM PST'));
    const date007 = new Date( Date.parse('2/26/22 1:00 PM PST'));
    const date008 = new Date( Date.parse('3/6/22 1:00 PM PST'));
    const date009 = new Date( Date.parse('3/12/22 1:00 PM PST'));
    const date010 = new Date( Date.parse('3/20/22 1:00 PM PST'));
    const date011 = new Date( Date.parse('3/27/22 1:00 PM PST'));
    const date012 = new Date( Date.parse('4/3/22 1:00 PM PST'));

    return (
        <div className="inset-shadow-minus-margin schedule_bg">
            <div className="container py-5">
                <div className="container tiny-width">
                    <div className="bg-dark big-round shadow pb-3">
                        <div className="bg-black px-3 py-3 border-bottom border-dark-lighter big-round-top text-center">
                            Release Schedule
                        </div>
                        <div className="bg-dark-grey px-4 py-3 border-bottom border-dark-lighter big-round-top">
                            <div className="row align-items-center text-green">
                                <div className="col-3">Event</div>
                                <div className="col-3">Date</div>
                                <div className="col-3 text-center">No Released</div>
                                <div className="col-3 text-end">Type</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#001</div>
                                <div className="col-3 small">{date001.toLocaleDateString(undefined,dateOpt)}<br/>{date001.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">100</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#002</div>
                                <div className="col-3 small">{date002.toLocaleDateString(undefined,dateOpt)}<br/>{date002.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">100</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#003</div>
                                <div className="col-3 small">{date003.toLocaleDateString(undefined,dateOpt)}<br/>{date003.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">90</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#004</div>
                                <div className="col-3 small">{date004.toLocaleDateString(undefined,dateOpt)}<br/>{date004.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">65</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#005</div>
                                <div className="col-3 small">{date005.toLocaleDateString(undefined,dateOpt)}<br/>{date005.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">65</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter done">
                            <div className="row align-items-center">
                                <div className="col-3">#006</div>
                                <div className="col-3 small">{date006.toLocaleDateString(undefined,dateOpt)}<br/>{date006.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">60</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter current">
                            <div className="row align-items-center">
                                <div className="col-3">#007</div>
                                <div className="col-3 small">{date007.toLocaleDateString(undefined,dateOpt)}<br/>{date007.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">60</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter">
                            <div className="row align-items-center">
                                <div className="col-3">#008</div>
                                <div className="col-3 small">{date008.toLocaleDateString(undefined,dateOpt)}<br/>{date008.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">55</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                        <div className="px-4 py-3 border-bottom border-dark-lighter">
                            <div className="row align-items-center">
                                <div className="col-3">#009</div>
                                <div className="col-3 small">{date009.toLocaleDateString(undefined,dateOpt)}<br/>{date009.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">55</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <div className="row align-items-center">
                                <div className="col-3">#010</div>
                                <div className="col-3 small">{date010.toLocaleDateString(undefined,dateOpt)}<br/>{date010.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">50</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <div className="row align-items-center">
                                <div className="col-3">#011</div>
                                <div className="col-3 small">{date011.toLocaleDateString(undefined,dateOpt)}<br/>{date011.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">50</div>
                                <div className="col-3 text-end text-truncate">Shuffle</div>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <div className="row align-items-center">
                                <div className="col-3">#012</div>
                                <div className="col-3 small">{date012.toLocaleDateString(undefined,dateOpt)}<br/>{date012.toLocaleTimeString(undefined,timeOpt)}</div>
                                <div className="col-3 text-center">50</div>
                                <div className="col-3 text-end text-truncate">Reverse<br/>Auction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection