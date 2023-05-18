import Accordion from '../components/Accordion/Accordion'

// const sample = [
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
//     { text: '', href: '' },
// ]

const links2014 = [
    {
        text: 'St. Thomas Select',
        href: 'https://drive.google.com/file/d/17xXcA7NnSB8F8kueoLsNNUwSQjtBZ0yH/view?usp=share_link',
    },
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/1vtEUEd1FqNEN_MSqEbn3tfZ8KOxVfmi-/view?usp=share_link',
    },
    {
        text: 'U of M Indoor',
        href: 'https://drive.google.com/file/d/1VPpMu62D3cOOLXgNxQ3wCDNA3xW9n_Y3/view?usp=share_link',
    },
    {
        text: 'White Bear Lake JV',
        href: 'https://drive.google.com/file/d/18BAHyb-9mzXv8ElI-w07P_3-Ma3x4v7l/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/1nReo0AV_x1l93FDk2oshQ6QrnmmBkRjG/view?usp=share_link',
    },
    {
        text: 'Rosemount 9-10',
        href: 'https://drive.google.com/file/d/1ca5iaBy5zoPo9iAI_0Bs4KjXbYMZDON0/view?usp=share_link',
    },
    {
        text: 'Andover Quad JV',
        href: 'https://drive.google.com/file/d/1cB9m7ki_D5vZcOgHF1AIqZQ-CoqnFi5g/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1sMxlt_pjFFNQu1LNQUc0z5XC1y-VkOEn/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1npg5Zp4NxK7zGmsdVGmrI6a7nfY8Rdk7/view?usp=share_link',
    },
    {
        text: 'Section 6AAA True Team',
        href: 'https://drive.google.com/file/d/11ve789WoCL248fBaiar0uCuJY_pRIYRx/view?usp=share_link',
    },
    {
        text: 'White Bear Lake True Team',
        href: 'https://drive.google.com/file/d/1L5bVnBr8hGmguKP7EmYyfAdYW3E9Jygq/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1GxyQ76wVYAB1YoASaNABOymWXp8tRGla/view?usp=share_link',
    },
    {
        text: '9-10 Conference',
        href: 'https://drive.google.com/file/d/1KGHoJb5pYeeiJf8h9u3u6jBUyoThLbjh/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1VRqqpTfA0Agqq-OtwM1QnDO2ZgQyQfaV/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1OsqnRJXaXQqWBj17JLgjre6iu6ZCwzhV/view?usp=share_link',
    },
    {
        text: 'Mounds View Freshmen Invite',
        href: 'https://drive.google.com/file/d/19CrNRZSMbt1Lsyd03NeKPSrzhNtDZfYo/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1ckA4XPiZJJZr7KyFh3sEO8jpGvjZRHYJ/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1NgneV3rtfRK8f_Go91mUnsIDqr9-3r8p/view?usp=share_link',
    },
]

const links2015 = [
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/1BEFCsdJSBvSb07P_xZ7JVuuso0qLqkdV/view?usp=share_link',
    },
    {
        text: 'Bethel Invite',
        href: 'https://drive.google.com/file/d/1cLAeGBXvY1nb7VaoR4RqOb7moFgCr1mA/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1ttEFrStSCep5I39HYcZij3V-qyLWWSyl/view?usp=share_link',
    },
    {
        text: 'Stillwater First Chance',
        href: 'https://drive.google.com/file/d/1jlRWMSVNs-NxbOSCbHnSexqsJGPtsbNz/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1cFVk7jt5bhXyafk5YSUizJaJEjQILnJV/view?usp=share_link',
    },
    {
        text: 'White Bear Lake JV',
        href: 'https://drive.google.com/file/d/1iMpKQAycyoWDITpQJR1ryLeRX93EWboI/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/14Wpa9Ic_-yZxZ56dy4C7a6FN42eDgZnL/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1FoSpUXMJyzczSHI9hsY4WlPLVTLEesQm/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1ooaO1busvT-OS9IOrCy2SExe9CclAY7P/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1kZDtJjspqO3LVO0pee1etNy78pbKqifo/view?usp=share_link',
    },
    {
        text: 'True Team 6AAA Section Meet',
        href: 'https://drive.google.com/file/d/1C8Co0OB-apAa2u8_FiM_HPWJBowbgqu9/view?usp=share_link',
    },
    {
        text: 'True Team JV',
        href: 'https://drive.google.com/file/d/1EARUUzwpG4n3BCeoUypNvw6IRLjCNw2S/view?usp=share_link',
    },
    {
        text: 'Conference 9-10',
        href: 'https://drive.google.com/file/d/1OVlzEcDhjJ4CsuB2CtVDGSnRUbTX8tlj/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1kSSv533w3_LW69-_DIZeKs6eHfk_9eWy/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/11M_fCuN9MvGfz2VUTzN2vYVS4QLW0XMj/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/12bYkEuO1vfoypjZngqvjjlFRJdiVcZDt/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1XQ0QXPp589rhILruzB27cEDUlki_dA61/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1heStPLv0GXphvr-_fzKCuc_u1od1poPc/view?usp=share_link',
    },
]

const links2016 = [
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/1_5lAQ60L5-4vqYpOhSPZ52mUBRLD2ePS/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1UIPZJMq8zlpdC6dYQ2FtkpRfPoFWwvIq/view?usp=share_link',
    },
    {
        text: 'Bethel Invite',
        href: 'https://drive.google.com/file/d/1wvRYs1zPDV6gDmd85ouBIvt983hGyX8s/view?usp=share_link',
    },
    {
        text: 'Stillwater First Chance',
        href: 'https://drive.google.com/file/d/1zBibQ9-ZGU6Qmknv5p3s0sp-U9x8tbzS/view?usp=share_link',
    },
    {
        text: 'Irish 9-10',
        href: 'https://drive.google.com/file/d/1aV0zVyqhLPnKvk4WxC2bDyYKaryLem7l/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/15E0kWnFhRG63Gx_ySgSFmZuYVlpBmdfa/view?usp=share_link',
    },
    {
        text: 'White Bear Lake JV',
        href: 'https://drive.google.com/file/d/1QghezEvJ3FtL6Tj7AAP1JoFsXL9ahFS2/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1p-ElrQQKmWY85PDOtaApcVkEOdsmDhL-/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1M0a-gemVFcyFyRnco9MqtiR_maRpyTKl/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1sxy6TGqkEB1EMkrQTGiUcdudsqNE88C9/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1zziVOemGy1yr5IACEO-eB4EBONmHABHy/view?usp=share_link',
    },
    {
        text: 'MV Freshmen Invite',
        href: 'https://drive.google.com/file/d/1cHLYd6Dq1-yIgxzyTd057UKCFyP8pqtd/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1daLfxTaEt9paidceBlO6jj4hZ-BTC5gW/view?usp=share_link',
    },
    {
        text: 'True Team 6AAA Section Meet',
        href: 'https://drive.google.com/file/d/1py8JiXyzJoqdf92EaXDdmjqd1lsTVG8r/view?usp=share_link',
    },
    {
        text: 'True Team JV',
        href: 'https://drive.google.com/file/d/1j1HckCJDFw0WVHU-EAqMSrwGm5zf69DB/view?usp=share_link',
    },
    {
        text: 'Conference 9-10',
        href: 'https://drive.google.com/file/d/1mXOPUqz41yLmeqvxZH3JaLEngupRJuAX/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1Zt-7z0CVoXkSxngA4AaKxqk8fc6-1kwv/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1ZydoH00KyXLUPzmgPbX6QbPNjYFn6_FN/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1U6JCG6vtGmyl3cDv2eXVSKnABfa233Zz/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1Vk4sv1S36NC_WB8eDttHqDKTyYW8g2MP/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1OLCHz7w0Q38sVnpY7Qy0-xwiwSq_Rq61/view?usp=share_link',
    },
    {
        text: '2016 Track Book',
        href: 'https://drive.google.com/file/d/1t_caI9m2L7KKR69poVXJgXT1iuz74xgI/view?usp=share_link',
    },
]

const links2017 = [
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/15yQR_3sf6P2bDsEhpbKmEZ5cPLdr2u97/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1g0Q9eB3KzTf3Awe9DU0AZw5x891DcLGW/view?usp=share_link',
    },
    {
        text: 'Griak U of M Indoor',
        href: 'https://drive.google.com/file/d/1FflevOMIWKVJRT9-CcLDbdrHghYf9nIf/view?usp=share_link',
    },
    {
        text: 'Mounds View Indoor Invite',
        href: 'https://drive.google.com/file/d/10wsXAjMAyZN-yDxD6kNsibuEtLNfLpiZ/view?usp=share_link',
    },
    {
        text: 'Stillwater First Chance',
        href: 'https://drive.google.com/file/d/1LEUw_KUS7mvmpsSvgJdIezVEyd0W3hY9/view?usp=share_link',
    },
    {
        text: 'Last Man Standing',
        href: 'https://drive.google.com/file/d/1KTQ8bUgl2hfprPAYInWqUKgBIMhvrWfF/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1Cke6lvMKSRD3zlxqXU__Wt0TM6UBLRwa/view?usp=share_link',
    },
    {
        text: 'White Bear JV',
        href: 'https://drive.google.com/file/d/1OS1gkKmVTSXoM9rT3xgExi_60DalUXM0/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/1-6qmo2hdlCaX6XMzc44rE4E3AqhjsJqb/view?usp=share_link',
    },
    {
        text: 'Mustang 9-10 Meet',
        href: 'https://drive.google.com/file/d/1zwPTJ1ORLQNiRDCKLqg1OMFSxVhPbWWl/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1e_f9DYedko47ovrGQCPJZ__K9MbTnRCl/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1OiVgIa5ImAgTggISmWsmBjGnztzA-Eou/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1NGYmsM9K55UncqThIGk_KyEogWaTiBo0/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1e7oTMgazDDsT5MA99vdKAqL0u1N68vYd/view?usp=share_link',
    },
    {
        text: 'MV Freshman Invite',
        href: 'https://drive.google.com/file/d/1g5gPUbHvEcTqEIfSJreCjwBuPSKMSA27/view?usp=share_link',
    },
    {
        text: 'True Team 6AAA Section Meet',
        href: 'https://drive.google.com/file/d/1dINexPd0oCr9cH6LBg1A94R32Fhaawgn/view?usp=share_link',
    },
    {
        text: 'True Team JV',
        href: 'https://drive.google.com/file/d/1vPg7bcFe3bt8F-3fB8Kd7TJRDHdBxcDC/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1MBLcXYk8hCBiOAHagAnR8-wJaYq3AIIb/view?usp=share_link',
    },
    {
        text: 'Conference 9-10',
        href: 'https://drive.google.com/file/d/17DeZyFu15Zo8aRR67o7FAKIxn7cKv3Py/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1mvQP73FcsQ_EYlPH4wGrPwqIbCQVsp2v/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1cmvIrrrKeNFlxMoZIALM_uv9FjCIaxIG/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1LL0rWkp1g1tC25bWBByBKXmKqhQ_j6Oo/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1CSkLYjU5HpFyxXNJiKCTUqqzsU3rGeNx/view?usp=share_link',
    },
    {
        text: '2017 Track Book',
        href: 'https://drive.google.com/file/d/14xdaIH8GQ0b8ej7GHYwXVgvdMaWyxhCU/view?usp=share_link',
    },
]

const links2018 = [
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/1N1JZVoDehW3VjirGTrCLs8HilGAQB5in/view?usp=share_link',
    },
    {
        text: 'Mounds View Indoor',
        href: 'https://drive.google.com/file/d/1R7sluy505gA9MP3-j3AqZvglaMzmJTOJ/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1QQ8s_AaqaPvFbxPD-mYV69CqkV7IpvsJ/view?usp=share_link',
    },
    {
        text: 'U of MN Griak Indoor',
        href: 'https://drive.google.com/file/d/1kELJ33VONI7Q9GnWqeFaK_xTEKe5pWze/view?usp=share_link',
    },
    {
        text: 'Last Man Standing Indoor',
        href: 'https://drive.google.com/file/d/1U82Qz0moGWtAJSwak-loYpUHq6Jw9F33/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1q-L7WJudyxmttsH3929-NiRYQtIztGpE/view?usp=share_link',
    },
    {
        text: 'White Bear Lake Triangular',
        href: 'https://drive.google.com/file/d/19wDHjsUZuTcArKSPteOaqDTCd2a2Lgyd/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/19zVozadpNc5DZN7_S7bGVKnsdOfv2CDK/view?usp=share_link',
    },
    {
        text: 'MV Freshman Invite',
        href: 'https://drive.google.com/file/d/1r8iQrutMIFZiuHVsom-u0pRti0l7O88J/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1f0-B6Jc94FWRgz5dRt0-BLbsgZTs28m2/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1x-8ehAuETceNATQmy0lULbfWOSgTCrgO/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1geRPWWYtnoSGW76stENB9j69-9uMT3ou/view?usp=share_link',
    },
    {
        text: 'True Team Section',
        href: 'https://drive.google.com/file/d/1RDZCdHbK8ErJonbuhxhLg6-Ep2SArBYz/view?usp=share_link',
    },
    {
        text: 'Pony Relays @Mustang Stadium',
        href: 'https://drive.google.com/file/d/1YHdgswkzQ4UFbVh40gfS1NSzRXquSKgn/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1w1nxd5uW9k6IY-G3wWXmHhaE3j0DwwmE/view?usp=share_link',
    },
    {
        text: '9-10 Conference',
        href: 'https://drive.google.com/file/d/1PctV0yXSMvDRzWmRktFsJokIUbkNrM1U/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1X1uEMD6vz9KwpXimyZ6xyc_GVEJmYuzo/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1VelFGin2zKzWQ2y94R4P-0f3CteopNAL/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1frHz-rlz_CKRcUlD49VuiX9KjxZOhEhi/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1CBNBNxcOnIbUiuxTYZwOp6V7kP5saQUi/view?usp=share_link',
    },
    {
        text: '2018 Track Book',
        href: 'https://drive.google.com/file/d/1KoYc_36UuVLNMi1CtsQDvlgXGOMzCiwz/view?usp=share_link',
    },
]

const links2019 = [
    {
        text: 'Bethel Indoor Time Trial',
        href: 'https://drive.google.com/file/d/1x_Nje6okCVMkKA0iwiK_u6nCcjxVl8KC/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1nNJblfNEqypGm5g4k2CuakixOySO91vg/view?usp=share_link',
    },
    {
        text: 'Mounds View Indoor',
        href: 'https://drive.google.com/file/d/12s1BUrLzXmMU0iAvyyGQeelGfV9D5O0s/view?usp=share_link',
    },
    {
        text: 'U of MN Griak Indoor',
        href: 'https://drive.google.com/file/d/1E3UhBuU8pqC6Z33nUeJQU8vVQFaDkIFR/view?usp=share_link',
    },
    {
        text: 'First Chance',
        href: 'https://drive.google.com/file/d/1y8w1_DeiYbahfQT3JZNgBWoCK9bluwHR/view?usp=share_link',
    },
    {
        text: 'Last Man Standing',
        href: 'https://drive.google.com/file/d/1T9XDeN66UYhwW2i5__uuW9Cec-sgP_Mb/view?usp=share_link',
    },
    {
        text: 'Lightning 9-10',
        href: 'https://drive.google.com/file/d/1XR9TeKm7nXQJFVtAyC3NJ32KjtR_ay9l/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1fX5AWZH4kVLkaiMJh5XG2z72efeJSsdE/view?usp=share_link',
    },
    {
        text: 'MV JV Meet',
        href: 'https://drive.google.com/file/d/1QfdHSse9eej1RA12CKAlaRZX9powc8L3/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/1FzSUQPNOKRfGfrd1lzf5MGm4cP6PstTh/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1Va92QCXvQlwjmT9n1rEyLiqD1-Y6OUlU/view?usp=share_link',
    },
    {
        text: 'MV Freshman Invite',
        href: 'https://drive.google.com/file/d/18uJ5N0_QsMrisKtYbwT1kjxDBcRWjOoj/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1avEWX_U8H0sUHt6DO1J9SEMKcKv_3KLh/view?usp=share_link',
    },
    {
        text: 'Bob Stewart',
        href: 'https://drive.google.com/file/d/1ZwgzExKYBiIj0cdREdXnd_jEYfFpqIFO/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1XqgSnNrWWUmERpXw2Z4r7K4lKzoFg8Yx/view?usp=share_link',
    },
    {
        text: 'True Team Section',
        href: 'https://drive.google.com/file/d/13WxVLENUIq4Mvozd2FKBuc39bvmHUjgb/view?usp=share_link',
    },
    {
        text: 'True Team JV',
        href: 'https://drive.google.com/file/d/1tRfRg0HhVVKemUUynzZWgIsK7WJ3gyCq/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/13Cw7QBvgc8-_WBwWttH74ThtEY_l7ajb/view?usp=share_link',
    },
    {
        text: '9-10 Conference',
        href: 'https://drive.google.com/file/d/1GETQxkcb7bOmgG5DR8aNGcfLOnxQA6D0/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1xM_kbzHtG65dL_imUJGNzO4Wt1NAFz-K/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1QiEgnNdpQx2xr1PjAK3L4MWpU8UlxTh6/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1Ba1reJ_E2QF616pUedPIwHYZq8cP_H0D/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1He7PUy4E8gxhOeqrnV7BHyT79SYdX4cT/view?usp=share_link',
    },
    {
        text: '2019 Track Book',
        href: 'https://drive.google.com/file/d/1u_ABRR7YRyIRM4C_c9huFTa3M5VMFpJx/view?usp=share_link',
    },
]

const links2021 = [
    {
        text: 'MV Triangular',
        href: 'https://drive.google.com/file/d/1OfgVOFtDevnGG2u20OXpElgZw38pYRUV/view?usp=share_link',
    },
    {
        text: 'Irondale Quint',
        href: 'https://drive.google.com/file/d/1mJ5Pfxk4GWEV1gvsc0jye0r6VQ7AHR7Q/view?usp=share_link',
    },
    {
        text: 'Stillwater JV Invite',
        href: 'https://drive.google.com/file/d/1YLXP79wllWayjdrhf_GYMlcu34U5yejr/view?usp=share_link',
    },
    {
        text: 'White Bear Varsity',
        href: 'https://drive.google.com/file/d/1jhbi0adiSbZvHiB1ZV0b8it_a6zFiycx/view?usp=share_link',
    },
    {
        text: 'Friday Night Lights',
        href: 'https://drive.google.com/file/d/1r8rosMhDcxo4iQa_TXHG-hOdDN7hxx5o/view?usp=share_link',
    },
    {
        text: 'Bob Stewart Invite',
        href: 'https://drive.google.com/file/d/1yMCeVThOl7ZCyC38OopNyZduM6jIwWdO/view?usp=share_link',
    },
    {
        text: 'MV JV Invite',
        href: 'https://drive.google.com/file/d/10P_G8UMH7HhvFM_d7Lb-XHZd97r4i6zW/view?usp=share_link',
    },
    {
        text: 'Wayzata Pent',
        href: 'https://drive.google.com/file/d/1q0DGhDzTujIOcNJu9i3kqyn80pLc4Cmd/view?usp=share_link',
    },
    {
        text: 'Roseville JV',
        href: 'https://drive.google.com/file/d/1zwiubLxtq8aQKxcFxZn_GQwxYrsanF6r/view?usp=share_link',
    },
    {
        text: 'WBL Varsity',
        href: 'https://drive.google.com/file/d/154FQB9YkEit28zV4WGHLUaPPZMDDeghk/view?usp=share_link',
    },
    {
        text: 'MV JV Meet',
        href: 'https://drive.google.com/file/d/1cMyBcHLXml_lpGoZ3_YVqKxkGddJOiYb/view?usp=share_link',
    },
    {
        text: 'True Team Sections',
        href: 'https://drive.google.com/file/d/1hxJUP2d2fd6BX5-1rlDWXMn-DTObJbyy/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1YYsVnGILC3tC96DfEs36dINQUOrikd-4/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1p-mcxZAVZe9tXzReZepb0tzH3xs886JY/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1Gi6JHEIXxWrjUfJkCSh1vQXw9KcgX4YM/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1fopALteaGtwJqUCVCE47gi1tyU3jg22e/view?usp=share_link',
    },
    {
        text: '2021 Track Book',
        href: 'https://drive.google.com/file/d/1NLDvSeP-SE2k5MootB72OO92ORDB4lOh/view?usp=share_link',
    },
]

const links2022 = [
    {
        text: 'Bethel Indoor',
        href: 'https://drive.google.com/file/d/1pTLpdc8hHVEskbAixADqBdluZQIbFWYs/view?usp=share_link',
    },
    {
        text: 'Griak Classic',
        href: 'https://drive.google.com/file/d/1wQlgLC7ccyMggbuLM2lgskXBu7ecPRVQ/view?usp=share_link',
    },
    {
        text: 'MV Indoor Invite',
        href: 'https://drive.google.com/file/d/1MCe0GdXiLN1BL99-ZNLc3Tn47QGnCgVn/view?usp=share_link',
    },
    {
        text: 'Gopher Invite',
        href: 'https://drive.google.com/file/d/1abkrglD_nvZsLJpNFJNRfq4EZDZgfWxv/view?usp=share_link',
    },
    {
        text: 'Last Man Standing',
        href: 'https://drive.google.com/file/d/1nsrkLb0HfiUzsqt_EcTctIDfdQyDtGuQ/view?usp=share_link',
    },
    {
        text: 'White Bear Relays',
        href: 'https://drive.google.com/file/d/1nS7yLkI6e_Zp4Ppad1clYBBFgrLWOdNd/view?usp=share_link',
    },
    {
        text: 'MV JV Invite',
        href: 'https://drive.google.com/file/d/1RVAcgH4ZtiwUW6bjkXQmJ6nZVKooeeWI/view?usp=share_link',
    },
    {
        text: 'Pony Relays',
        href: 'https://drive.google.com/file/d/1PLtMW5IoR5yLZpF91hP_4gt5A7dhXWc-/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team Invite',
        href: 'https://drive.google.com/file/d/1k6hwTQKikv4KHxWrLCT4-0jx_dboPqUs/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/1d1wTQx1DbS4gxhRsw74a9i9FXU38R0Us/view?usp=share_link',
    },
    {
        text: 'Bob Stewart Invite',
        href: 'https://drive.google.com/file/d/1jrRX_vgzwdtwSSIDxU61iZ8391aYQJQ2/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1ilBwy2yt2VHyjkSN6bD_uKEXPbVNbgEj/view?usp=share_link',
    },
    {
        text: 'True Team Section 6AAA',
        href: 'https://drive.google.com/file/d/1S3BOMLTM-KBUScsTP9RG_S--CgBmwuFg/view?usp=share_link',
    },
    {
        text: 'Conference 9-10',
        href: 'https://drive.google.com/file/d/1eRxLzFAGmbPdvI3j9jKr9NDGz4w0Knko/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1UHZ4buID5yZFNkz0CvTd8h_Tlrj4VR6o/view?usp=share_link',
    },
    {
        text: 'True Team State',
        href: 'https://drive.google.com/file/d/1jIJAA88N7J605ha6IntWw6IICGxz-J7t/view?usp=share_link',
    },
    {
        text: 'Suburban East Conference',
        href: 'https://drive.google.com/file/d/1CSbWd1LOW4SWl7iAofWum22YNRC0DLg3/view?usp=share_link',
    },
    {
        text: 'Section 5AA',
        href: 'https://drive.google.com/file/d/1VVsxZitrs5Lsw8Q9sNbWFzXncRLRFs0w/view?usp=share_link',
    },
    {
        text: 'MSHSL State Meet',
        href: 'https://drive.google.com/file/d/1tcLSVYZkf_CZYb0_SnGBeazwDUcCtwBU/view?usp=share_link',
    },
    {
        text: '2022 Track Book',
        href: 'https://drive.google.com/file/d/1E8sYOWbHJ5L6iPjfZRP5fFQX5KnGZOP5/view?usp=share_link',
    },
]

const links2023 = [
    {
        text: 'Bethel Time Trials',
        href: 'https://drive.google.com/file/d/1SO-ofLuTmdxvy0eTZpX5u4TdEY9Wm725/view?usp=share_link',
    },
    {
        text: 'St. Thomas Indoor',
        href: 'https://drive.google.com/file/d/1FXqXi2h0dqsnBHACNyCnJbWt9BJ-BKHj/view?usp=share_link',
    },
    {
        text: 'Griak Indoor',
        href: 'https://drive.google.com/file/d/1e4KlwwoIkrCpqNgeFcE5nbwcVhrbooPP/view?usp=share_link',
    },
    {
        text: 'WBL Indoor',
        href: 'https://drive.google.com/file/d/1d6Mp9usXWKGh9lWL58WfUMZL7zXQcWIz/view?usp=share_link',
    },
    {
        text: 'Mankato Indoor',
        href: 'https://drive.google.com/file/d/1wPZI0_KN4V9EMtK6v66-oAv3j5wbuEez/view?usp=share_link',
    },
    {
        text: 'MV Quadrangular',
        href: 'https://drive.google.com/file/d/1W0YA4y-HwqqWBQqr2ISSM43SPfFU_pDx/view?usp=share_link',
    },
    {
        text: 'Lightning 9-10',
        href: 'https://drive.google.com/file/d/1UM6YTYmlLeUvQVLtYPgeD6oHwAr708dN/view?usp=share_link',
    },
    {
        text: 'WBL Relays',
        href: 'https://drive.google.com/file/d/1cbMQ8r9aWQ223Zcsro_vMayF_k4E1QGP/view?usp=share_link',
    },
    {
        text: 'MV JV Invite',
        href: 'https://drive.google.com/file/d/1plzBF0BeApSR7RMXjsZNCktfF_DWfygF/view?usp=share_link',
    },
    {
        text: 'Hopkins True Team',
        href: 'https://drive.google.com/file/d/1HMvJC9AM5LmNWL3K_YOs7byP495cEBHg/view?usp=share_link',
    },
    {
        text: 'MV 9th Grade Invite',
        href: 'https://drive.google.com/file/d/1P3FgwG5yVLIKEaRs8uWbNE-MgH3OsxZT/view?usp=share_link',
    },
    {
        text: 'Hamline Elite Meet',
        href: 'https://drive.google.com/file/d/10Vg3ldaXjxVfMW1xTKSjTg9ovyNHJr8T/view?usp=share_link',
    },
    {
        text: 'Bob Stewart Invite',
        href: 'https://drive.google.com/file/d/1awKndsk-W9BFG-eHlW-Aah-1lHFpkli6/view?usp=share_link',
    },
    {
        text: 'Wayzata Relays',
        href: 'https://drive.google.com/file/d/1dU_wgjfR1-lL54zbbLkXeGWCfAx4dWbX/view?usp=share_link',
    },
    {
        text: 'True Team Section',
        href: 'https://drive.google.com/file/d/12mnFAOyxEq2IYNs_B8_P7K6vtPx9qg3Z/view?usp=share_link',
    },
    {
        text: 'Conference 9-10',
        href: 'https://drive.google.com/file/d/1bcMnOxzcN6eDrSrqayd_aJ9zDA0sV5k5/view?usp=share_link',
    },
    {
        text: 'Last Chance',
        href: 'https://drive.google.com/file/d/1DGsj9N4fCR_XfRHfZ86pcr_FfQ7K3Yva/view?usp=share_link',
    },
    // { text: 'True Team AAA State', href: '' },
    // { text: 'Suburban East Conference', href: '' },
    // { text: 'Section 5AAA', href: '' },
    // { text: 'MSHSL State', href: '' },
]

export const TFResults2014 = () => <Accordion title="2014" links={links2014} />
export const TFResults2015 = () => <Accordion title="2015" links={links2015} />
export const TFResults2016 = () => <Accordion title="2016" links={links2016} />
export const TFResults2017 = () => <Accordion title="2017" links={links2017} />
export const TFResults2018 = () => <Accordion title="2018" links={links2018} />
export const TFResults2019 = () => <Accordion title="2019" links={links2019} />
export const TFResults2021 = () => <Accordion title="2021" links={links2021} />
export const TFResults2022 = () => <Accordion title="2022" links={links2022} />
export const TFResults2023 = () => <Accordion title="2023" links={links2023} />
