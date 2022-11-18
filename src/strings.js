export const localizedStrings = {
    description: {
        "en": "The PBO developed a tool allowing political parties to estimate the interest charges from their new proposals. For example, if a party wants to implement a measure and its cost is financed by the public debt, then public debt charges will be added to the cost of said measure. Similarly, if a party wants to implement a measure with a net expected revenue, then the revenue would reduce the public debt and would therefore reduce the public debt charges.\n\nTo use the tool, the user must only enter in the appropriate boxes the expected revenue and spending associated with the measure(s) for which they want to estimate the cost in interest. Interest rates projected by the PBO are then applied to the difference between the revenue and the spending. As a result, the user will be able to see the cumulative surplus/deficit including public debt charges associated with one or more measures. The results are displayed over a 5-year horizon.",
        "fr": "Le DPB a développé un outil permettant aux partis politiques d’estimer les frais en intérêts de leurs nouvelles propositions. Par exemple, si une mesure est proposée et son coût est financé par la dette publique, alors des frais d’intérêt s’ajouteront au coût total de ladite mesure. De même, si une mesure est proposée et permet d’engranger de nouveaux revenus, alors ceux-ci permettront de réduire la dette publique et ainsi de réduire les frais d’intérêt payés sur celle-ci.\n\nAfin d’utiliser l’outil, l’usager n’a qu’à entrer dans les cases indiquées le revenu et les dépenses provenant des mesures dont il/elle désire estimer les frais d’intérêt. Des taux d’intérêt projetés par le DPB sont ensuite appliqués à la différence entre les revenus et les dépenses. L’usager pourra ainsi voir le surplus/déficit cumulatif incluant les frais d’intérêt sur la dette publique provenant d’une ou de plusieurs mesures. Les résultats sont reportés sur un horizon de 5 ans."
    },
    updatedOn: {
        en: "Updated:",
        fr: "Mis à jour :"
    },

    showBackEnd: {
        en: "Show details",
        fr: "Afficher les détails",
    },
    printPage: {
        en: "Print",
        fr: "Imprimer"
    },

    units: {
        en: {
            millions: "$M",
        },
        fr: {
            millions: "En million de $",
        }
    },

    ouputsTitle: {
        en: "Results",
        fr: "Résultats"
    },

    surplusOfTheYearWarning: {
        en: "Includes debt charges on deficits/surplus from previous years resulting from policies implemented by the party platform.",
        fr: "Inclut les intérêts sur la dette des déficits/surplus des années précédentes résultant des politiques implementés par le parti dans sa plateforme."
    },

    /**
     * Groups
     */

    groups: {
        en: {
            overallNewDebt: "Overall New Debt",
            mediumTermBondsTurnoverAndNewIssuances: "Medium-term bonds turnover & New Issuances",
            longTermBondsNewIssuances: "Long-Term Bonds New Issuances",
        },
        fr: {
            overallNewDebt: "Nouvelle dette totale",
            mediumTermBondsTurnoverAndNewIssuances: "Rotation des obligations à moyen terme et nouvelles émissions",
            longTermBondsNewIssuances: "Nouvelles émissions d'obligations à long terme",
        },
    },

    /**
     * Inputs
     */
    totalRevenuesMeasures: {
        en: "Total revenues measures",
        fr: "Revenu total provenant de nouvelles mesures"
    },


    totalProgramSpendingMeasures: {
        en: "Total program spending measures",
        fr: "Dépense totale provenant de nouvelles mesures"
    },


    /**
     * Outputs
     */


    // Backend outputs

    day90TreasuryBillsRate: {
        en: {
            label: "Annual public debt charges",
        },
        fr: {
            label: "Frais annuels de la dette publique",
        }
    },


    marginalEffectiveInterestRate: {
        en: {
            label: "Marginal effective interest rate (all new debt)",
        },
        fr: {
            label: "Taux d'intérêt effectif marginal (toute nouvelle dette)",
        }
    },

    debtChargesOnPrimaryBalances: {
        en: {
            label: "Debt charges on primary balances",
        },
        fr: {
            label: "Charges de la dette sur les soldes primaires",
        }
    },

    debtChargesOnExistingDebtStock: {
        en: {
            label: "Debt charges on existing debt stock",
        },
        fr: {
            label: "Charges de la dette sur le stock de la dette existante",
        }
    },


    year2BondTurnover: {
        en: {
            label: "2-Year bond turnover",
        },
        fr: {
            label: "Rotation des obligations à 2 ans",
        }
    },

    year3BondTurnover: {
        en: {
            label: "3-Year bond turnover",
        },
        fr: {
            label: "Rotation des obligations à 3 ans",
        }
    },

    year5BondTurnover: {
        en: {
            label: "5-Year bond turnover",
        },
        fr: {
            label: "Rotation des obligations à 5 ans",
        }
    },

    totalMediumTermBondTurnover: {
        en: {
            label: "Total medium-term bond turnover",
        },
        fr: {
            label: "Rotation totale des obligations à moyen terme",
        }
    },

    mediumTermBondRate: {
        en: {
            label: "Medium-term bond rate (new borrowing)",
        },
        fr: {
            label: "Taux des obligations à moyen terme (nouveaux emprunts)",
        }
    },

    longTermBondRate: {
        en: {
            label: "Long-term bond rate (new borrowing)",
        },
        fr: {
            label: "Taux des obligations à long terme (nouveaux emprunts)",
        }
    },


    // General Outputs 

    netChangeOnPrimaryBalance: {
        en: {
            label: "Net change on primary balance ",
        },
        fr: {
            label: "Changement net sur le solde primaire",
        }
    },

    annualPublicDebtCharge: {
        en: {
            label: "Annual public debt charges",
        },
        fr: {
            label: "Frais annuels de la dette publique",
        }
    },


}