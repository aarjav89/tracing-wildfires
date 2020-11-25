import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key : 'AIzaSyAXTXFPdWuGeDFtE4OFxVexMBY3v_MJuhQ'}}
                defaultCenter = {center}
                defaultZoom = { zoom }
            >

            </GoogleMapReact>

        </div>
    )
}
/* setting default map location view to California below */

Map.defaultProps = {
    center : {
        lat : 42.3265,
        lng: -122.8756

    },
    zoom : 6
}

export default Map
