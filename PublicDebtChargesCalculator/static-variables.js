/**
 * Last update. Is used to update user facing label. 
 * YYYY-MM-DD
 */
const lastUpdated = "2020-12-03";

/**
 * Declaration of all years in table.
 * Year(label, dayRate90, yearRate10, ratioOfBondsToTBills)
 */
const staticYears = [
    new Year('2019-2020', 1.535, 1.39, 0.815105),
    new Year('2020-2021', 0.194166666666666, 0.599166666666666, 0.675084175),
    new Year('2021-2022', 0.2, 0.78, 0.746776325),
    new Year('2022-2023', 0.2, 0.9475, 0.7842001),
    new Year('2023-2024', 0.295, 1.0125, 0.80373555),
    new Year('2024-2025', 0.764999999999999, 1.42, 0.813933175),
    new Year('2025-2026', 1.265, 1.92, 0.81925635),
    new Year('2026-2027', 1.765, 2.42, 0.822035125),
    new Year('2027-2028', 2.17, 2.8975, 0.82348565),
    new Year('2028-2029', 2.2, 3, 0.82424285),
    new Year('2029-2030', 2.2, 3, 0.824605133333334)
];