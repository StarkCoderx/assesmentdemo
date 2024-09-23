import React, { useEffect, useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const SearchResultSearchbar = () => {
    const cities = ["Pune", "Mumbai", "Bangaluru", "Nashik", "Ahmednagar"];
    const [error, setError] = useState(false);
    const [vendorClicked, setVendorClicked] = useState(false);
    const [regionClicked, setRegionClicked] = useState(false);
    const [selectedVendorType, setSelectedVendorType] = useState("");
    const [selectedTradeOrBusiness, setSelectedTradeOrBusiness] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [showLeftDivider, setShowLeftDivider] = useState(true);
    const [showRightDivider, setShowRightDivider] = useState(true);
    const [selectedSection, setSelectedSection] = useState("");

    const dropdownRef = useRef(null);

    const mostPopularSearchesData = {
        Contractors: ["Civil", "Plumbing", "Waterproofing", "EPC", "Labour"],
        Suppliers: [
            "Cement",
            "TMT Bar",
            "Conveyor",
            "Electrical",
            "Building Materials",
        ],
        Consultants: [
            "RCC",
            "Electrical",
            "Project Management",
            "MK Design",
            "Civil",
        ],
    };

    const mostPopularSearchCityData = ["Pune", "Mumbai", "Delhi", "Bengaluru"];
    const [regions, setRegions] = useState(cities);

    const handleChangeRegionValue = (e) => {
        const value = e.target.value;
        const searchTerm = value
            ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
            : "";

        setSelectedRegion(searchTerm);

        // Filter the initialRegions array directly
        const filterCities = cities.filter((city) =>
            city.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRegions(filterCities);
    };

    const handleSearchClick = (e) => {
        if (
            selectedVendorType === "" ||
            selectedTradeOrBusiness === "" ||
            selectedRegion === ""
        ) {
            setError(true);
            setShowLeftDivider(true);
            setShowRightDivider(true);
            setSelectedSection("");
        } else {
            setError(false);
            // Perform search action
            setSelectedSection("");
        }
    };

    const handleVendorDropdown = () => {
        setVendorClicked(!vendorClicked);
        setRegionClicked(false);
        setSelectedSection("vendor");
    };

    const handleVendorHover = () => {
        setShowLeftDivider(false);
    };
    const handleVendorNonHover = () => {
        setShowLeftDivider(true);
    };

    const handleTradeDropdown = () => {
        setVendorClicked(false);
        setRegionClicked(false);
        setShowLeftDivider(false);
        setShowRightDivider(false);
        setSelectedSection("trade");
    };

    const handleTradeOrBusinessHover = () => {
        setShowLeftDivider(false);
        setShowRightDivider(false);
    };
    const handleTradeOrBusinessNonHover = () => {
        setShowLeftDivider(true);
        setShowRightDivider(true);
    };

    const handleRegionDropdown = () => {
        setRegionClicked(!regionClicked);
        setVendorClicked(false);
        setSelectedSection("region");
        setShowLeftDivider(true);
    };

    const handleRegionHover = () => {
        setShowRightDivider(false);
    };
    const handleRegionNonHover = () => {
        setShowRightDivider(true);
    };

    const handleSelectedVendorType = (value) => {
        setSelectedVendorType(value);
        setVendorClicked(false);
        setShowLeftDivider(true);
        setShowRightDivider(true);
    };

    const handleSelectedRegion = (value) => {
        setSelectedRegion(value);
        setRegionClicked(false);
        setShowLeftDivider(true);
        setShowRightDivider(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearchClick();
            e.preventDefault();
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVendorClicked(false);
                setRegionClicked(false);
                setShowLeftDivider(true);
                setShowRightDivider(true);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`flex justify-start items-center  ${selectedSection === "" ? "bg-[#F4F5F6]" : "bg-[#EBEBEB]"
                } md:w-[527px] md:h-[44px] lg:w-[639px] lg:h-[50px] border rounded-full shadow ${error
                    ? "border-[1px] border-[#EB5A4F] ring ring-red-200"
                    : "border-slate-300 "
                }`}
        >
            {/* vendor type */}
            <div
                onMouseEnter={handleVendorHover}
                onMouseLeave={handleVendorNonHover}
                onClick={handleVendorDropdown}
                className="relative "
                style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }}
            >
                <div
                    className={`flex items-center hover:rounded-full rounded-full md:w-[140px] md:h-[43px]  lg:w-[160px] lg:h-[49px] ${selectedSection === "vendor" ? "bg-white" : "hover:bg-[#E1E1E1]"
                        }`}
                >
                    <img
                        src="https://storagereponeevaydevcdn.blob.core.windows.net/business/user_icon_searchbar.svg"
                        alt="Vendor Type"
                        className="w-5 h-5 ml-4 bg-transparent"
                    />
                    <input
                        type="text"
                        className="h-6 w-full focus:outline-none text-sm text-black font-medium border-none focus:ring-transparent bg-transparent px-[12px] placeholder:font-medium lg:placeholder:text-sm md:placeholder:text-xs lg:mr-1 overflow-x-auto  placeholder-[#787878]"
                        value={selectedVendorType}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setSelectedVendorType(e.target.value)}
                        placeholder="Vendor Type"
                    />
                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/searchbar_arrow.svg" alt="" className="md:pr-[8px] lg:pr-[12px]" />

                    {!selectedVendorType.trim() && error && (
                        <Tooltip
                            title="This field is required"
                            arrow
                            placement="top-end"
                            open
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 500 }}
                        >
                            <img
                                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/circle_exclamation_solid_org.svg"
                                alt="Error"
                                className="absolute right-2 top-4 w-4 h-4"
                            />
                        </Tooltip>
                    )}
                    {vendorClicked && (
                        <ul
                            ref={dropdownRef}
                            className="absolute z-20 bg-[#fff] py-4 w-[233px] rounded-3xl md:top-[50px] lg:top-[60px] text-sm font-medium shadow cursor-default"
                        >
                            {[
                                "Material Only (Trader)",
                                "Material Only (Manufacturer)",
                                "Labour Only (Labour Contractor)",
                                "Labour with Material (Providing and Fixing)",
                                "Consultant",
                            ].map((name) => (
                                <li
                                    onClick={() => handleSelectedVendorType(name)}
                                    className="py-1 hover:bg-[#C3D5FE] hover:rounded-md px-6 ml-2 mr-2"
                                    key={name}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {/* Search by service or material */}
            <div
                onMouseEnter={handleTradeOrBusinessHover}
                onMouseLeave={handleTradeOrBusinessNonHover}
                onClick={handleTradeDropdown}
                className="relative flex items-center"
            >
                {showLeftDivider &&
                    selectedSection !== "trade" &&
                    selectedSection !== "vendor" && (
                        <div className="pb-1 absolute left-0" style={{ width: '0.5px', height: '21px', backgroundColor: '#BFBFBF' }}></div>
                    )}
                <div
                    className={`flex items-center hover:rounded-full md:w-[214px] md:h-[43px] lg:w-[263px] lg:h-[49px] ${selectedSection === "trade"
                        ? "bg-white rounded-full"
                        : "hover:bg-[#E1E1E1]"
                        }`}
                >
                    <img
                        src="https://storagereponeevaydevcdn.blob.core.windows.net/business/N2_searchbar_magnifying_glass.svg"
                        alt="Search"
                        className="w-4 h-4 md:ml-3 lg:ml-[12px]"
                    />
                    <input
                        type="text"
                        className="h-6 w-full text-black text-sm font-medium border-none focus:ring-transparent focus:outline-none bg-transparent px-[12px] placeholder:font-medium lg:placeholder:text-sm md:placeholder:text-xs overflow-x-auto placeholder-[#787878]"
                        value={selectedTradeOrBusiness}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setSelectedTradeOrBusiness(e.target.value)}
                        placeholder="Search by service or material"
                    />
                    {!selectedTradeOrBusiness.trim() && error && (
                        <Tooltip
                            title="This field is required"
                            arrow
                            placement="top-end"
                            open
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 500 }}
                        >
                            <img
                                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/circle_exclamation_solid_org.svg"
                                alt="Error"
                                className="absolute right-2 top-4 w-4 h-4"
                            />
                        </Tooltip>
                    )}
                </div>
            </div>

            {/* Region */}
            <div
                onMouseEnter={handleRegionHover}
                onMouseLeave={handleRegionNonHover}
                onClick={handleRegionDropdown}
                className="relative"
                style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                }}
            >
                {showRightDivider &&
                    selectedSection !== "trade" &&
                    selectedSection !== "region" && (
                        <div className="absolute lg:mt-3 md:mt-2  left-0" style={{ width: '0.5px', height: '21px', backgroundColor: '#BFBFBF' }}></div>
                    )}
                <div
                    className={`flex items-center rounded-full hover:rounded-full md:h-[43px] lg:w-full lg:h-[49px] ${selectedSection === "region" ? "bg-white" : "hover:bg-[#E1E1E1]"
                        }`}
                >
                    <img
                        src="https://storagereponeevaydevcdn.blob.core.windows.net/business/searchbar_location_nn.svg"
                        alt="Location"
                        className="ml-[12px]"
                    />
                    <input
                        type="text"
                        className="h-6 md:w-[80px] focus:outline-none lg:w-[112px] text-black text-sm font-medium border-none focus:ring-transparent bg-transparent px-[12px] placeholder:font-medium lg:placeholder:text-sm md:placeholder:text-xs overflow-x-auto placeholder-[#787878]"
                        value={selectedRegion}
                        onKeyDown={handleKeyDown}
                        onChange={handleChangeRegionValue}
                        placeholder="City"
                    />
                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/searchbar_arrow.svg" alt="" className="md:mr-2 lg:mx-2" />
                    {!selectedRegion.trim() && error && (
                        <Tooltip
                            title="This field is required"
                            arrow
                            open
                            placement="top-end"
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 500 }}
                        >
                            <img
                                src="https://storagereponeevaydevcdn.blob.core.windows.net/business/circle_exclamation_solid_org.svg"
                                alt="Error"
                                className="absolute right-[100px] mr-1 top-4 w-4 h-4"
                            />
                        </Tooltip>
                    )}
                    {regionClicked && (
                        <ul
                            ref={dropdownRef}
                            className="absolute z-50 max-h-48 overflow-auto bg-[#fff] py-4 md:w-[200px] lg:w-[215px] rounded-3xl md:top-[50px] lg:top-[60px] text-sm font-medium shadow cursor-default"
                        >
                            {selectedRegion === "" && (
                                <>
                                    <li className="pl-4 pb-2 text-[#787878]">Popular Cities</li>
                                    {mostPopularSearchCityData.map((city) => (
                                        <div className="flex items-center pl-4" key={city}>
                                            <li
                                                onClick={() => handleSelectedRegion(city)}
                                                className="py-1 hover:bg-[#C3D5FE] hover:rounded-md  w-full mr-4 pl-2"
                                            >
                                                {city}
                                            </li>
                                        </div>
                                    ))}
                                </>
                            )}
                            <li className="pl-4 py-2 text-[#787878]">Other Cities</li>
                            {regions.map((city) => (
                                <div className="flex items-center pl-4" key={city}>
                                    <li
                                        onClick={() => handleSelectedRegion(city)}
                                        className="py-1 hover:bg-[#C3D5FE] hover:rounded-md  w-full mr-4 pl-2"
                                    >
                                        {city}
                                    </li>
                                </div>
                            ))}
                            {regions.length === 0 && (
                                <li className="py-1 pl-6 pr-4 ml-2 mr-2 text-gray-600">
                                    No city found
                                </li>
                            )}
                        </ul>
                    )}
                    {/* Search button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Stop the event from bubbling up
                            handleSearchClick();
                        }}
                        className="flex justify-center items-center md:mr-[2px] lg:mr-[6px] w-[38px] h-[38px] rounded-full bg-[#F16500] text-white "
                    >
                        <img
                            src="https://storagereponeevaydevcdn.blob.core.windows.net/business/searchbar_white.svg"
                            alt="Search"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchResultSearchbar;
