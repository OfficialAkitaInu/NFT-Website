import React from 'react'

import './index.scss';

import NftFilterData from '../../details.json';

const NFTModal = ({modalTitle, modalImg, modalData}) => {
    return (
        <div className="modal fade" id="nftModal" tabIndex="-1" aria-labelledby="nftModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-discord big-round">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Akita #{modalTitle}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src={modalImg} className="img-fluid big-round" alt=""/>
                        </div>
                        <div className="col">
                            <table className="table table-dark table-striped">
                                <tbody>
                                <tr>
                                    <th className="px-4" scope="row">Name:</th>
                                    <td width="100%">Akita #{modalData.name}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Head:</th>
                                    <td width="100%">
                                        {modalData.Head ? NftFilterData[0].info[modalData.Head-1].name : null}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Eyes:</th>
                                    <td>{modalData.Eyes ? NftFilterData[1].info[modalData.Eyes-1].name : null}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Snout:</th>
                                    <td>{modalData.Snout ? NftFilterData[2].info[modalData.Snout-1].name : null}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Body:</th>
                                    <td>{modalData.Body ? NftFilterData[3].info[modalData.Body-1].name : null}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Back:</th>
                                    <td>{modalData.Back ? NftFilterData[4].info[modalData.Back-1].name : null}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Skin:</th>
                                    <td>{modalData.Skin ? NftFilterData[5].info[modalData.Skin-1].name : null}</td>
                                </tr>
                                <tr>
                                    <th className="px-4" scope="row">Background:</th>
                                    <td>{modalData.Background ? NftFilterData[6].info[modalData.Background-1].name : null}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NFTModal
