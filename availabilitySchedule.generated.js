const availabilitySchedule = {
    "D10510": { // - NEWBORN HEARING SCREENING TEST - NEWBORN HEARING SCREENING
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D0725": { // DR (MS.) PUSHPA PUNCHIHEWA - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D3145": { // DR . SHIWARATHNAM - ENT SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D3976": { // DR A K PRABHODANA RANAWEERA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D3174": { // DR A SRITHARAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0358": { // DR A.D.K.S.N. YASAWARDENA - ENT SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D7603": { // DR ABILASHINI MANOHARAN - DENTAL SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5729": { // DR ABIRAMY CHANDRASEGARAM - DENTAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D6158": { // DR ACHALA ABEYWARDENA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D1656": { // DR ACHINI RANASINGHE - PSYCHOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1399": { // DR ACHINTHA DISSANAYAKA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D3973": { // DR AHAMED RIYAAZ - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D3503": { // DR AHMAD RUSHDHI - NUTRITION PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1615": { // DR AJANTHA PATHMALAL - SURGEON
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0392": { // DR AJITH AMARASINGHE - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D5173": { // DR AJITH RAJAPAKSHA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D5048": { // DR AMALI DALPATADU - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D12678": { // DR AMILA RUBASINGHE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D5611": { // DR AMILA SIRIWARDANA - PLASTIC AND RECONSTRUCTIVE SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D5624": { // DR AMILA SIRIWARDANA - PLASTIC SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D9825": { // DR AMILA SIRIWARDANA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D3337": { // DR AMILA WALAWWATTA - CARDIOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2218": { // DR AMITHA MANTHRIRATNE - PAEDIATRICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D6329": { // DR AMITHA NELUMDENIYA - DERMATOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0308": { // DR ANANDA ELLAWALA - ORTHOPAEDIC SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D0450": { // DR ANANDA LAMAHEWAGE - PAEDIATRIC SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D1270": { // DR ANIDU PATHIRANA - CARDIOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D7274": { // DR ANIL P AMBAWATTA - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D14052": { // DR ANJALI JAYAWEERA BANDARA - EYE SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D15820": { // DR ANJALI JAYAWEERA BANDARA - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D7531": { // DR ANOJA RAJAPAKSE - CONSULTANT PHYSICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D8936": { // DR ANOJA RAJAPAKSE - GERIATRIC PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D4988": { // DR ANURA S.K. BANAGALA - GENERAL SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D11223": { // DR ANURADHA HERATH - CHILD AND ADOLESCENT PHYCHIATRIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D12705": { // DR ANURADHA KODIPPILI - PAEDIATRIC CHEST PHYSICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D6323": { // DR ANURADHA KODIPPILI - PAEDIATRICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D14058": { // DR ANURUDDHA H. KARUNARATHNE - VENEREOLOGIST(S.T.D)
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D14132": { // DR ANURUDDHA H. KARUNARATHNE - SEXUAL HEALTH
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D1620": { // DR ANURUDDHA PADENIYA - PAEDIATRIC NEUROLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D7536": { // DR ANUSHA TENNEKUMBURA - PAEDIATRIC EYE SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D4805": { // DR ARAVINDA SANTHUSH DISSANAYAKE - ONCOLOGICAL SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0987": { // DR ARUNAJITH AMARASINGHA - PLASTIC AND RECONSTRUCTIVE SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D3130": { // DR ARUNI WIJESINGHE - PAEDIATRICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D2089": { // DR ASANKA RATNAYAKE - PHYSICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D2127": { // DR ASELA AMARASIRI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D3058": { // DR ASELA JAYATHILAKA - SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D4746": { // DR ASELA JAYATHILAKA - GENERAL SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D3447": { // DR ASELA SENANAYAKE - ONCOLOGICAL SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D2300": { // DR ASHA SAMARANAYAKE - CHEST PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D0395": { // DR B.J.C. PERERA - PAEDIATRICIAN
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D0491": { // DR BANDULA WIJESIRIWARDANA - PHYSICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D14617": { // DR BANDULA WIJESIRIWARDANA - CONSULTANT PHYSICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D14453": { // DR BHARATHI P. BARANAGE - BREAST FEEDING ADVISOR
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D15433": { // DR BINARA AMARASINGHE - OPHTHALMOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D4302": { // DR BUDDHIMA JAYASINGHE - NEONATAL PAEDIATRICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D6365": { // DR C.A.AMALI SARATHCHANDRA - RADIOLOGISTS
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2187": { // DR CARMELINE MOTHA - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D7060": { // DR CHAMARA SENARATNA - SLEEP HEALTH AND GENERAL WELLNESS PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2444": { // DR CHAMEERA BANDARA - PLASTIC EYE SURGERY(COSMETIC CONSULTATIONS ONLY)
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D4883": { // DR CHAMINDA GARUSINGHE - ENDOCRINOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D3022": { // DR CHAMINDA MATHOTA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0856": { // DR CHANDANA GALAPPATHTHI - FAMILY PHYSICIAN
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D3594": { // DR CHANDANA JAYASUNDARA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D3832": { // DR CHANDANA KANAKARATNE - PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D0668": { // DR CHANDIMA SURIYARACHCHI - PAEDIATRIC SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D15304": { // DR CHANDINA WEDAMESTRI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D11728": { // DR CHANDIRA GUNASENA - DENTAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D1481": { // DR CHANDRASIRI LOKUBALASOORIYA - RADIOLOGISTS
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D11131": { // DR CHANDRIKA J. SUBASINGHE - ENDOCRINOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D5553": { // DR CHANIL EKANAYAKE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D6670": { // DR CHANNA DE SILVA - PAEDIATRIC CHEST PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D10789": { // DR CHINTHAKA BANAGALA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D4289": { // DR CHRYSHANTH S. DALPATADU - PAEDIATRIC NEUROLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D4718": { // DR D.C.J. WICKRAMARACHCHI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5333": { // DR DARSHIKA THENNAKOON - ENT SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D12419": { // DR DEEPA HIMANI LIYANAGE - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D5890": { // DR DEEPA HIMANI LIYANAGE - DERMATOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0975": { // DR DEEPAL PERERA - PAEDIATRICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D0199": { // DR DHARMASRI JAYAWARDENA - PAEDIATRIC SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D2325": { // DR DILHAN  RUPASINGHE - DENTAL SURGEON
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D4993": { // DR DILINI H. SAMARAKOON - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D10634": { // DR DILINI VIDYATHILAKE VIPULAGUNA - COMMUNITY AND DEVELOPMENT PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D3836": { // DR DILRUKSHI THENNAKOON - RHEUMATOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D9101": { // DR DILUK SENADHEERA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D2516": { // DR DILUM PALLIYAGURUGE - NEUROLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1722": { // DR DIMUTHU TENNAKOON - ORTHOPAEDIC SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D11561": { // DR DINELKA YOHANI SAMARAJEEWA - COSMETIC PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D12727": { // DR DINELKA YOHANI SAMARAJEEWA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2227": { // DR DINUSHKA JAYAWEERABANDARA - CONSULTANT PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D6459": { // DR DULANGI DAHANAYAKE - CHILD AND ADOLESCENT PHYCHIATRIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D5260": { // DR DULANI KOTTAHACHCHI - ENDOCRINOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D5261": { // DR DULANI KOTTAHACHCHI - DIABETOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D7556": { // DR DULEEPA BARANAGE - EYE SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0319": { // DR DULIP PERERA - PLASTIC SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D9826": { // DR DULIP PERERA - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D4994": { // DR DUMINDA ARIYARATNE - GENERAL SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D14898": { // DR DUMINDA MUNIDASA - RHEUMATOLOGY AND  REHABILITATION
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D1233": { // DR DUMINDA SAMARASINGHE - PAEDIATRIC CARDIOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D12067": { // DR DUMINDA SUBASINGHE - GASTROINTESTINAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D2092": { // DR FATHIMA HASMIYA - DERMATOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2134": { // DR G SUJAHARAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D4034": { // DR G. NALIKA NIRMALENE DE SILVA - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2136": { // DR G.A. RANATHUNGA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D3118": { // DR G.H.D.C JANAPPRIYA - DERMATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D0220": { // DR GAMINI GOONETILLEKE - SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D4980": { // DR GAMINI GOONETILLEKE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D5740": { // DR GANGANATH GUNATHILAKE - PAEDIATRIC CHEST PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D11570": { // DR GAYAN DE SILVA - GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D3128": { // DR GAYAN DE SILVA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D13777": { // DR GAYAN EKANAYAKE - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D2081": { // DR GAYAN EKANAYAKE - PLASTIC SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D12982": { // DR GAYAN RANASINGHE - CONSULTANT PHYSICIAN
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D6450": { // DR GAYAN RANASINGHE - PHYSICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D2904": { // DR GAYAN SARANGA SUMATHIPALA - MEDICAL VIROLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D13944": { // DR GREATA PIGERA - NUTRITION PHYSICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0681": { // DR H.T. WICKRAMASINGHE - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2323": { // DR HAMID RIZAN MOHAMED - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D3156": { // DR HARSHA ATAPATTU - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D4062": { // DR HARSHANI SAPARAMADU - NUTRITIONIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D2934": { // DR HASHIR ARIFF - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D4802": { // DR HASSIM ZIARD - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D13775": { // DR HIMAN DE SILVA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2615": { // DR HIMAN DE SILVA - SPORTS AND EXERCISE PHYSICIAN
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D8666": { // DR HIRANTHA SUJEEWA WIJESINGHE - CONSULTANT FAMILY PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D3949": { // DR HIRANYA ABEYSEKARA - PAEDIATRIC EYE SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D7489": { // DR I L JAYAWEERA - VENEREOLOGIST(S.T.D)
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2567": { // DR I.R. RAGUNATHAN - PAEDIATRIC CARDIOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1498": { // DR INDIKA BOTEJU - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D2138": { // DR INDU ASANKA JAYAWARDANE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D2165": { // DR INDUNIL PIYADIGAMA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2563": { // DR INOKA PERERA - PAEDIATRIC NEPHROLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D7488": { // DR IRESH L JAYAWEERA - SEXUAL MEDICINE
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1255": { // DR JAGATH HERATH - CARDIOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D0440": { // DR JAGATH MALLAWA - SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D10062": { // DR JAGATH MALLAWA - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D15272": { // DR JALIYA JAYASEKERA - CLINICAL ONCOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1488": { // DR JANAKA GOONARATNE - PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D5500": { // DR JANAKA RAJAPAKSHA - RADIOLOGISTS
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D1769": { // DR JANAKA WAIDYASEKARA - NEURO PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D3008": { // DR JANATH LIYANAGE - PAEDIATRIC SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0253": { // DR JAYAINDRA FERNANDO - SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0862": { // DR JAYAINDRA FERNANDO - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D0254": { // DR JAYAN MENDIS - PSYCHIATRIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D4128": { // DR JAYANTHI DE SILVA - DENTAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D12921": { // DR JAYATHRI JAGODA - PAEDIATRIC DERMATOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1495": { // DR JAYATHRI JAGODA - RHEUMATOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2181": { // DR JERARD FERNANDO - RADIOLOGISTS
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D6964": { // DR K AMBIGA - CARDIOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1331": { // DR K D DUMINDA - PHYSICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D15610": { // DR K SIVASUGANTHAN - PLASTIC AND RECONSTRUCTIVE SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2354": { // DR K V C JANAKA - PHYSICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D0054": { // DR K.L FERNANDO - SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D7265": { // DR K.L FERNANDO - GENERAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D13420": { // DR K.P.NISHANTHA PATHIRANA - AESTHETIC AND COSMETIC CENTER
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1503": { // DR K.P.NISHANTHA PATHIRANA - DERMATOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0473": { // DR K.S PERERA - SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D3957": { // DR KALANA PARANA PALLIYA GURUGE - UROLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2070": { // DR KANAGARATNAM SIVAKUMAR - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1601": { // DR KANISHKA DE SILVA - ONCOLOGICAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2141": { // DR KANISHKA KARUNARATNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D13779": { // DR KAVINDA RAJAPAKSE - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2394": { // DR KAVINDA RAJAPAKSE - PLASTIC SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D3236": { // DR KAVINDA RAJAPAKSE - PLASTIC AND RECONSTRUCTIVE SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D5205": { // DR KAVINDI KARUNANAYAKE - ORTHODONTIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D12878": { // DR KAVINDRA NANAYAKKARA - DERMATOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D13231": { // DR KAVINDRA NANAYAKKARA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D11182": { // DR KELUM JAYASINGHE - GYNAECOLOGICAL ONCOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D8958": { // DR KISHANI PATHIRANA - RADIOLOGISTS
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1855": { // DR KOSALA KARUNARATNE - PAEDIATRICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D15262": { // DR KUMUDU WICKRAMASINGHA - OPHTHALMOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D4706": { // DR KUSALA GUNASEKARA - RHEUMATOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2142": { // DR L.A.W. SIRISENA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D5699": { // DR L.B. LAHIRU PROBODHA - GENETIC COUNSELOR
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0824": { // DR LAKSHMAN OBEYSEKARA - ONCOLOGIST CANCER SPECIALIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D3158": { // DR LAKSHMAN PALLEMULLA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1994": { // DR LALITH SAMARAWICKRAMA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D15471": { // DR LAWANYA WIJESEKARA - TRANSFUSION PHYSICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D10848": { // DR LAYANI C RATHNAYAKE - PSYCHIATRIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D0750": { // DR M B N DASANAYAKE - ORTHOPAEDIC SURGEON
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D15706": { // DR M D S GUNATHILAKA - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1026": { // DR M M FAIZ - SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D4989": { // DR M M FAIZ - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D14583": { // DR M. H. SHARMY M. HASSAN - NEONATOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0226": { // DR M.I.K NAEEM - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D2202": { // DR M.IFLAL ZUBAIR - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D1750": { // DR MADHANGA CHANDRASEKARA - DENTAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2146": { // DR MADHAVA KARUNARATHNA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D12058": { // DR MADHAVI WIJAYAPALA - RADIOLOGISTS
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D1169": { // DR MAHANADA UDUKALA - ONCOLOGICAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D13635": { // DR MAHEESHA KULASINGHE - PAEDIATRIC SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D4052": { // DR MAHENDRA SOMATHILAKA - PAEDIATRIC ONCOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D3446": { // DR MAHESH GAMAGE - EYE SURGEON
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D3673": { // DR MAHESH WEERAPPULI - OCCUPATIONAL THERAPIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D0703": { // DR MAHINDA DE ALWIS - HAEMATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D0595": { // DR MALIK SAMARASINGHE - PAEDIATRIC SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D12659": { // DR MALITHI GURUGE - PAEDIATRICIAN
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1475": { // DR MALKA JAYATHILAKE - SPEECH AND LANGUAGE THERAPIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D9790": { // DR MANJULA HERATH - ORAL AND MAXILLOFACIAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4673": { // DR MANJULA HEWAGEEGANA - PAEDIATRICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D7026": { // DR MANOJ WITHANATHANTRIGE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D11101": { // DR MANU WIMALACHANDRA - HAEMATOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5709": { // DR MANURA LEKAMWATTAGE - CARDIAC ELECTROPHYSIOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D15699": { // DR MEDHAVINI DISSANAYAKA - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D2864": { // DR MIHIRI RUBASINGHE - ENT SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2007": { // DR MILHAN BATCHA - GYNAECOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D5223": { // DR MILHAN BATCHA - CONSULTANT IN FERTILITY
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D10202": { // DR MINOLI JOSEPH - ONCOLOGICAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D15343": { // DR MIRNA KUMARADAS - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D0052": { // DR MISHAN PRAVIN WIJESINGHE - PLASTIC SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D13401": { // DR MISHAN PRAVIN WIJESINGHE - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D4438": { // DR MOHAMED RISHARD - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D7570": { // DR MUDITHA GUNASEKARA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D4813": { // DR N. S. JAYASINGHE - PHYSICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D3992": { // DR NALAKA JAYASINGHE - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D1359": { // DR NALIN C KITHULWATTA - PAEDIATRICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2450": { // DR NALIN GAMAATHIGE - NEONATAL PAEDIATRICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D15657": { // DR NALIN RAJAKARUNA - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D5920": { // DR NALIN SAMARANAYAKE - DENTAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D7571": { // DR NANDADEVA SENEVIRATNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D0284": { // DR NANDALAL GUNARATNE - UROLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D1135": { // DR NANDANEE WICKRAMASINGHE - PAEDIATRICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D4114": { // DR NAOMAL PERERA - ONCOLOGICAL SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1013": { // DR NAVAMALIKA DE SILVA - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D4362": { // DR NAVODA ATAPATTU - PAEDIATRIC ENDOCRINOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D2416": { // DR NILAN KALIDASA RODRIGO - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D1730": { // DR NILUKSHI MANISHA PERERA - HAEMATOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1407": { // DR NIMEERA C. WEERARATHNE - SPEECH AND LANGUAGE THERAPIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D9766": { // DR NIMESHA GAMHEWAGE - PAEDIATRIC NEONATOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1484": { // DR NIRUKSHAN JAYAWEERA - NEURO SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D2013": { // DR NISHANTHA SUMITH COLAMBAGE - ORAL AND MAXILLOFACIAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D2147": { // DR NISHENDRA KARUNARATNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D10685": { // DR OMALA WIMALARATHNE - MEDICAL VIROLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5780": { // DR P D LIYANAGAMA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D1943": { // DR P.D. PRASAD SIRIWARDANA - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D0907": { // DR P.D.R. SISIL KUMARA - PAEDIATRIC SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D4029": { // DR PADMAMUNI A. DENEGAMA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D3199": { // DR PESHALA DANGALLA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D9763": { // DR PIYUMI PERERA - VENEREOLOGIST(S.T.D)
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D8835": { // DR PRABATH KUMARASINGHE - SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D8836": { // DR PRABATH KUMARASINGHE - GENERAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D12941": { // DR PRABATH RANDOMBAGE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D5263": { // DR PRADEEP ALAHAKOON - ONCOLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D1086": { // DR PRADEEP KUMARASINGHE DE SILVA - PHYSICIAN
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D9907": { // DR PRADEEP SIRIWARDANA - HAEMATO ONCOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D12581": { // DR PRAGAASH SHANMUGANATHAN - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D9430": { // DR PRAGAASH SHANMUGANATHAN - PLASTIC AND RECONSTRUCTIVE SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1657": { // DR PRASANNA JAYASEKARA - DENTAL SURGEON (PREVENTIVE DENTISTRY)
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D3891": { // DR PREM ANAND - EYE SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D2638": { // DR PREMINI RAJENDIRAN - DERMATOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D1383": { // DR PRIYANI PETHIYAGODA - PAEDIATRICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1450": { // DR PRIYANTHA MADAWALA - ONCOLOGIST CANCER SPECIALIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D7287": { // DR R VIMALARAJAN - SUBSPECIALIST IN REPRODUCTIVE MEDICINE
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D3435": { // DR R. PRATHAPAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D2338": { // DR R.M. SURANTHA PERERA - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2245": { // DR R.R CHINTHIKA FERNANDO - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1944": { // DR RAJEEV SATHANANDARAJA - PAEDIATRIC NEONATOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1723": { // DR RAJIV G. RAJENDRAN - SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D4735": { // DR RAJIV G. RAJENDRAN - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2823": { // DR RAMEEZ FURUKAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D2148": { // DR RANJITH ALMEIDA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D5121": { // DR RANSIRINI DE SILVA - PSYCHOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D10645": { // DR RASIKA DE SILVA - GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D9964": { // DR RASIKA DE SILVA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D14865": { // DR RASIKA WALPITAGAMAGE - OPHTHALMOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D7495": { // DR RASIKA WIJESUNDARA - PAIN MANAGEMENT IN LABOUR
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D5490": { // DR RAVI JAYAWARDANA - PHYSICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D0487": { // DR RAVINDRA KIRIHENA - ENT SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D13866": { // DR RAVINI THARUKA LUCKNADEE - DENTAL SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D15338": { // DR RENUKA JAYATISSA - NUTRITION CLINIC
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D1678": { // DR RIFETH  HUSSAIN RASHEED - DENTAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D4056": { // DR ROHAN LIYANAGE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D3069": { // DR ROHAN SIRISENA - SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D6362": { // DR ROHAN SIRISENA - GENERAL SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D7572": { // DR ROHANA HATTOTUWA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0767": { // DR ROHANA R. VIDANAGE - SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D0937": { // DR ROHANA R. VIDANAGE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D2781": { // DR ROHANTHA PERIYAPPERUMA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0724": { // DR ROHITHA SENEVIRATNE - PAEDIATRICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D4487": { // DR ROMANIE FERNANDO - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D0281": { // DR ROMESH GUNASEKERA - PLASTIC SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D13776": { // DR ROMESH GUNASEKERA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D3104": { // DR ROSHAN GOVINNAGE - DENTAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4249": { // DR RUKMAL GUNATILAKA - PAEDIATRICIAN
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D4713": { // DR RUKSHAN C FERNANDOPULLE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D2271": { // DR RUKSHAN SOORIYARACHCHI - ORTHOPAEDIC SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D5856": { // DR RUMAL GUNARATHNE  - DENTAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D1900": { // DR RUWAN MORAWAKKORALA - PAEDIATRIC CARDIOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D5270": { // DR RUWAN SILVA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2231": { // DR RUWANGI DISSANAYAKA - PAEDIATRICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1030": { // DR S JEYAKUMAR - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D9783": { // DR S. ILEPERUMA - ORTHODONTIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D0111": { // DR S. NARENTHIRAN - CARDIOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D7366": { // DR S.H.R. SANJEEWA - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D8526": { // DR S.H.R. SANJEEWA - SURGEON
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D0655": { // DR S.K. JAYASINGHE - ORAL AND MAXILLOFACIAL SURGEON
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D0076": { // DR S.S JAYARATNE - SURGEON
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D11572": { // DR S.S JAYARATNE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D14303": { // DR SACHINTHA WIJESIRIWARDANA - CLINICAL ONCOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D4819": { // DR SACHITH ABHAYARATNA - DIABETOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D4820": { // DR SACHITH ABHAYARATNA - ENDOCRINOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D5077": { // DR SAJITH RANATHUNGA - SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D8834": { // DR SAJITH RANATHUNGA - GENERAL SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D0717": { // DR SALIYA ILLANGASINGHE - ORTHOPAEDIC SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D0671": { // DR SALIYA PATHIRANA - EYE SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D15743": { // DR SALIYA PATHIRANA - OPHTHALMOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1979": { // DR SAMAN GUNASEKARA - DERMATOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D9829": { // DR SAMAN GUNASEKARA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D4721": { // DR SAMAN NANAYAKKARA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D1758": { // DR SAMAN PUSHPAKUMARA - NEURO SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D4053": { // DR SAMANTHA DE SILVA - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1660": { // DR SAMEERA JAYASINGHE - SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D4747": { // DR SAMEERA JAYASINGHE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D15619": { // DR SAMINDA PARANAHEWA - OPHTHALMOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1847": { // DR SAMPATH WITHANAWASAM - CARDIOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D5487": { // DR SANATH P AKMEEMANA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D2299": { // DR SANDHYA  DOLUWEERA - PAEDIATRICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D0545": { // DR SANJAYA ABEYGUNASEKARA - PAEDIATRIC SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2442": { // DR SANJAYA FERNANDO - PAEDIATRIC NEUROLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D2045": { // DR SANJEEWA GARUSINGHE - NEURO SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D7480": { // DR SANJEEWA THENNAKOON - NEONATOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D4748": { // DR SANJEEWANI RUPASINGHE - ENT SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4621": { // DR SARADA KANNANGARA - GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D5111": { // DR SARADA KANNANGARA - ONCOLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D2152": { // DR SARATH  R SAMARATHUNGA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D11534": { // DR SENANI WIJETUNGA - CHILD AND ADOLESCENT PHYCHIATRIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0255": { // DR SEPALIKA MENDIS - CARDIOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D4707": { // DR SHAMITHA DASSANAYAKE - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D15203": { // DR SHARMILA GAFFOOR - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D6957": { // DR SHASHIKA SUBHASHINI LIYANAGE - MEDICAL NUTRITIONIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D7255": { // DR SHASHIKA SUBHASHINI LIYANAGE - DIETICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1380": { // DR SHEHAN PERERA - PAEDIATRIC CARDIOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D3570": { // DR SHEMOON MARLEEN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2346": { // DR SHYAMA BASNAYAKE - PAEDIATRIC NEONATOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D3011": { // DR SHYAMA BASNAYAKE - PAEDIATRICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1467": { // DR SHYAMA SUBASINGHE - PHYSICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D5468": { // DR SRIAN D.L. FERNANDO - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0370": { // DR SRILAL DE SILVA - PAEDIATRICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D3979": { // DR SRIYANI SAMARAWEERA - DERMATOLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D3498": { // DR SUDATH SENARATNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2153": { // DR SUDHEERA UDUWELA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D15687": { // DR SUJANTHE WICKRAMASINGHE - GENERAL SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D15821": { // DR SUJANTHE WICKRAMASINGHE - SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D6099": { // DR SUJATHA SAMARAKOON - VENEREOLOGIST(S.T.D)
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D14972": { // DR SUMINDA PREMARATHNA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D12808": { // DR SUMUDU JAYASINGHE - SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D9014": { // DR SUMUDU JAYASINGHE - GENERAL SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D4888": { // DR SUMUDU SENEVIRATNE - PAEDIATRIC ENDOCRINOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D7564": { // DR SUNIL FERNANDO - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D7569": { // DR SUNIL KULATHUNGA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2374": { // DR SUNIL WIJAYASINGHE - ORTHOPAEDIC SURGEON (ADULT & PAEDIATRIC)
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2084": { // DR SURANGA HETTIPATHIRANA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D0581": { // DR T. AJITH FERNANDO - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D6437": { // DR T. SABESAN - MAXILLOFACIAL SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D1117": { // DR T. SEKAR - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D5498": { // DR THAMARA RAJAPAKSHA - RADIOLOGISTS
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D11484": { // DR THARINDU EDIRISURIYE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D12875": { // DR THARINDU SAMARAJEEWA - HAIR RESTORATION TRANSPLANT
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D12876": { // DR THARINDU SAMARAJEEWA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D12882": { // DR THARINDU SAMARAJEEWA - AESTHETIC PHYSICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D8973": { // DR THIASHA FERNANDO - MEDICAL AESTHETIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D9832": { // DR THIASHA FERNANDO - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4160": { // DR THIMATHI WICKRAMASEAKARA - NUTRITION SPECIALIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D9015": { // DR THULASI WEERASINGHE - DERMATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D0906": { // DR THUSHAN BENERAGAMA - PLASTIC SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D9831": { // DR THUSHAN BENERAGAMA - AESTHETIC AND COSMETIC CENTER
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D1687": { // DR THUSHARA DE SILVA - PHYSICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D2932": { // DR THUSHARA GALABADA - CHEST PHYSICIAN
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D2154": { // DR TILAK DISSANAYAKE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D8974": { // DR TUWANI WIJESUNDARA - MEDICAL AESTHETIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D9827": { // DR TUWANI WIJESUNDARA - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D7568": { // DR U.D.P. RATNASIRI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2719": { // DR U.G KARIYAWASAM - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D9795": { // DR UDAYAKUMARA DENAGAMA - RESTORATIVE DENTISTRY AND DENTAL IMPLANTOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D3103": { // DR UDITHA DASSANAYAKE - GASTROENTEROLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2672": { // DR UDITHA KODITHUWAKKU - RADIOLOGISTS
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0499": { // DR UPALI WERAGAMA - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D12427": { // DR UPALI WERAGAMA - HEPATOLOGISTS
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D6438": { // DR UPALI WERAGAMA - GASTROENTEROLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0503": { // DR V.P GAMAGE - SURGEON
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D4986": { // DR V.P GAMAGE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D3814": { // DR VASANTHIKA S THUDUVAGE - ENT SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D12387": { // DR VIJITH VIDYABHUSHANA - ANOMALY SCAN
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2156": { // DR VIJITH VIDYABHUSHANA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D12070": { // DR VINDYA WIJAYABANDARA - PSYCHIATRIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D10452": { // DR VIRAJ ROHANA ABEYKOON - GENERAL SURGEON
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D10461": { // DR VIRAJ ROHANA ABEYKOON - SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D1419": { // DR W.NISHANTHA MENDIS - SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D4741": { // DR W.NISHANTHA MENDIS - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D1298": { // DR WARUNA PATHIRANA - PHYSICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1451": { // DR WASANTHA RATHNAYAKE - ONCOLOGIST CANCER SPECIALIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1885": { // DR WASANTHA WIJENAYAKE - SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D4730": { // DR WASANTHA WIJENAYAKE - GENERAL SURGEON
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D2157": { // DR Y.A.GAMINI PERERA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D1158": { // DR YAMUNA K. RANAWEERA - PHYSICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D1921": { // DR YASAS ABEYWICKRAMA - PLASTIC SURGEON
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D9830": { // DR YASAS ABEYWICKRAMA  - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D15127": { // DR YENIFA SAMARAWEERA - CLINICAL HAEMATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D4265": { // DR YVONNE WEERASINGHE - SPEECH AND LANGUAGE THERAPIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D3761": { // DR ZACKY HANIFFA - CARDIOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0646": { // DR(MRS) A.L. DHARMARATHNA - EYE SURGEON
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2158": { // DR(MRS) A.R.J.P. NIYAS - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0652": { // DR(MRS) AMIDINIE AMARASINGHE - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D1967": { // DR(MRS) CHANDANIE  WICKREMARATNA  - DERMATOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2016": { // DR(MRS) CHANDRANI GUNASEKARA - BREAST FEEDING
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2159": { // DR(MRS) CHANDRIKA YAPA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D14136": { // DR(MRS) D MARUTHINI - MISCARRIAGE CLINIC
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D3762": { // DR(MRS) D MARUTHINI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D6643": { // DR(MRS) D MARUTHINI  - SUBSPECIALIST IN REPRODUCTIVE MEDICINE
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D11569": { // DR(MRS) DARSHANI BUDDHIKA HETTIARACHCHI - CHILD AND ADOLESCENT PHYCHIATRIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1376": { // DR(MRS) DHAMMIKA GUNARATNE - NUTRITIONIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D1235": { // DR(MRS) DILINI H. SAMARAKOON - SURGEON
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0391": { // DR(MRS) DILRUKSHI RUBERU - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D1035": { // DR(MRS) DINUSHA ABEYWICKRAMA - Ear Piercing
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1968": { // DR(MRS) DULANI AMARASENA - BREAST FEEDING
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D3478": { // DR(MRS) H.K WELGAMA - PAEDIATRICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D6926": { // DR(MRS) HIMALI JAYAWEERA - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D7567": { // DR(MRS) HIMANI MOLLIGODA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0343": { // DR(MRS) I AMARASINGHE - ONCOLOGICAL SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D4427": { // DR(MRS) INDIKA LIYANAGE - NEONATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2192": { // DR(MRS) INDIRA KAHAVITA - DERMATOLOGIST
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D10963": { // DR(MRS) INOSHA BAMBARANDA - FERTILITY SPECIALIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D10964": { // DR(MRS) INOSHA BAMBARANDA - REPRODUCTIVE MEDICINE
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4716": { // DR(MRS) JANAKI KARUNASINGHE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D6911": { // DR(MRS) JAYAMALEE JAYAWEERA - PHYSICIAN
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D0571": { // DR(MRS) JEEWANI SARATHCHANDRA - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D0594": { // DR(MRS) KALYANI GURUGE - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D4717": { // DR(MRS) KAMANIE MAYADUNNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D0791": { // DR(MRS) KANCHANA WIJESINGHE - SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D11720": { // DR(MRS) KANCHANA WIJESINGHE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D6334": { // DR(MRS) KANTHI NANAYAKKARA - VIROLOGIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1820": { // DR(MRS) KUMUDU WEERASEKARA - PAEDIATRICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1954": { // DR(MRS) LAKMALI MORAWAKA - TRANSFUSION PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D12470": { // DR(MRS) LAKMALI PATHIRAJA - CONSULTANT DERMATOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D12471": { // DR(MRS) LAKMALI PATHIRAJA - AESTHETIC MEDICINE AND COSMETOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D6848": { // DR(MRS) LILANI PANANGALA - RHEUMATOLOGY AND  REHABILITATION
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D4361": { // DR(MRS) MALIKA WEERASINGHE - PSYCHIATRIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D10581": { // DR(MRS) MANOJI PRABASHINI GAMAGE - NUTRITION PHYSICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D6856": { // DR(MRS) NADEEJA SENEVIRATHNE - CARDIOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D1074": { // DR(MRS) NAYANA PERERA - DERMATOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D12877": { // DR(MRS) NAYANA PERERA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D2417": { // DR(MRS) NAYANA SAMARASINGHE - RADIOLOGISTS
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D7481": { // DR(MRS) NILANTHI TALAGALA KOSSINNA - DENTAL SURGEON
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D1377": { // DR(MRS) NIMALKA ARIYARATNE - PHYSICIAN
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D1691": { // DR(MRS) OMALA WIMALARATHNE - VACCINOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D4258": { // DR(MRS) PADMAPANI PADENIYA - GENETIC COUNSELOR
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D1431": { // DR(MRS) PIYARA DILANI RATNAYAKE - PAEDIATRIC NEUROLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D9311": { // DR(MRS) RAJIMA SRINANI - NEONATOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D0402": { // DR(MRS) RAMYA DE SILVA - PAEDIATRICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D1034": { // DR(MRS) RANGA PERERA - Ear Piercing
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D0964": { // DR(MRS) RENUKA JAYATISSA - NUTRITIONIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D7393": { // DR(MRS) RENUKA MAHANAMA - GENERAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D2348": { // DR(MRS) S.G.S ADIKARAM - PAEDIATRICIAN
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1682": { // DR(MRS) SAMANTHI PARANAVITHANE - DERMATOLOGIST
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D4722": { // DR(MRS) SAMANTHI PREMARATHNE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D9994": { // DR(MRS) SEMANTHI ANDARAWEWA - CONSULTANT IN RESTORATIVE DENTISTRY
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D4426": { // DR(MRS) SHANIKA VITHARANA - HAEMATOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D0363": { // DR(MRS) SHANTHI MALI DE SILVA - PAEDIATRICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D6621": { // DR(MRS) SRIYANI SAMARAWEERA - DERMATOLOGIST (ADULT AND PAEDIATRIC)
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D9315": { // DR(MRS) T.S. CHANDRATILEKA - BREAST FEEDING ADVISOR
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D0588": { // DR(MRS) TAMARA PEIRIS - PAEDIATRICIAN
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D7517": { // DR(MRS) THEJA DEERASINGHE - COSMETOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D8977": { // DR(MRS) THEJA DEERASINGHE - CONSULTANT DERMATOLOGIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D9824": { // DR(MRS) THEJA DEERASINGHE - AESTHETIC AND COSMETIC CENTER
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D4274": { // DR(MRS) THUSHANI HENEGAMA - PSYCHIATRIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D5133": { // DR(MRS) UMEDHA JAYASINGHE - VENEREOLOGIST(S.T.D)
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D7285": { // DR(MRS) UMEDHA JAYASINGHE - SEXUAL HEALTH
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D10939": { // DR(MRS) WATHSALA HATHAGODA - PAEDIATRICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D13312": { // DR(MS) AMITHA NELUMDENIYA - CONSULTANT DERMATOLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D12187": { // DR(MS) APEKSHA PERERA - DERMATOLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D3106": { // DR(MS) JAYANI MANCHANAYAKE - GASTROENTEROLOGIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D1033": { // DR(MS) KANTHI NANAYAKKARA - VACCINOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D3819": { // DR(MS) KERTHIKA  RAGUPATHY - DENTAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D4475": { // DR(MS) NIROSHANA GUNATHISSA - ORTHODONTIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1384": { // DR(MS) RENUKA MAHANAMA - SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D7553": { // DR(MS) THATHYA DE SILVA - SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D7611": { // DR(MS) THATHYA DE SILVA - GENERAL SURGEON
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1318": { // DR(MS) ZAKIYA KAMARZAMAN - DENTAL SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D0345": { // Dr. NALINDA RODRIGO - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2082": { // MISS TINA HESHANI SOLOMONS - PSYCHOLOGIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D10472": { // MR A.D. AJITH KARUNARATHNA - SPORT THERAPIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D11102": { // MR AMILA DILSHAN KARUNATHILAKE - PHYSIOTHERAPIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1892": { // MR BHANAKA FERNANDO - PHYSIOTHERAPIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D1771": { // MR CHINTHAKA KANNANGARA - OCCUPATIONAL THERAPIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D0625": { // MR JALIYA UDUWELLA - PHYSIOTHERAPIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D6034": { // MR KUSHAN ANTHONY - PHYSIOTHERAPIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D7218": { // MR NALIN ATHAPATHTHU - PHYSIOTHERAPIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D1762": { // MR PASAN THAMBAWITA - PHYSIOTHERAPIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D5737": { // MR RMC ASANKA - EEG TECHNICIAN
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D11456": { // MR SACHINE EKANAYAKE - COUNSELING  PSYCHOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2216": { // MR SAMINDA JAYARATHNE - OCCUPATIONAL THERAPIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D11324": { // MR THUSIL GUNAWARDHANA - ORTHOPTIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1252": { // MR W. PIUMAL FERNANDO - PHYSIOTHERAPIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D3646": { // MRS ASHARI WEERASINGHE - SPEECH AND LANGUAGE THERAPIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D5881": { // MRS P. A. ANULA GUNARATNA - PHYSIOTHERAPIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D10076": { // MRS SHAYANA AMARASEKARA - NUTRITIONIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1544": { // MRS SUMUDU RAJANAYAKE - DIETICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D1695": { // MRS SUMUDU RAJANAYAKE - NUTRITIONIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D2361": { // MS AKILA  GAVESHIKA RATHNAYAKA - PHYSIOTHERAPIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D5626": { // MS DILUM RASALI WELIWITA - NUTRITIONIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "08:15", end: "08:45", duration: 30 },
            { start: "08:45", end: "09:15", duration: 30 },
            { start: "09:15", end: "09:45", duration: 30 },
            { start: "14:15", end: "14:45", duration: 30 },
            { start: "14:45", end: "15:15", duration: 30 }
        ]
    },
    "D7127": { // MS DINITHI PERERA - PHYSIOTHERAPIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D2656": { // MS H.I HEMANTHI HAPUTHANTHRI - SPEECH AND LANGUAGE THERAPIST
        workingDays: [3, 4, 5],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "16:00", end: "17:00", duration: 60 }
        ]
    },
    "D12065": { // MS JANEESHA KAUSHALYA - PHYSIOTHERAPIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D5110": { // MS KALYANI WEERASINGHE - OCCUPATIONAL THERAPIST
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D7086": { // MS KAUSHALYA GAYAMALI - OCCUPATIONAL THERAPIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D10467": { // MS MAHESHIKA DILRUKSHI PERERA - MASSAGE THERAPIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D13778": { // MS MAHESHIKA DILRUKSHI PERERA - AESTHETIC AND COSMETIC CENTER
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D3740": { // MS NILU PERERA - SPECIAL EDUCATION NEED
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1282": { // MS SONALII C. JAYATHILAKA - SPEECH AND LANGUAGE THERAPIST
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D4715": { // PROF A. KALUARACHCHI - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D2866": { // PROF ACHALA BALASOORIYA - PHYSICIAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D4712": { // PROF AJITH FERNANDO - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D1334": { // PROF BAWANTHA GAMAGE - SURGEON
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D4996": { // PROF BAWANTHA GAMAGE - GENERAL SURGEON
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D1393": { // PROF C. RANDENIYA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D3869": { // PROF DAKSHITHA WICKRAMASINGHE - SURGEON
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:00", end: "14:30", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 }
        ]
    },
    "D8518": { // PROF DAKSHITHA WICKRAMASINGHE - GENERAL SURGEON
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D7566": { // PROF DEEPAL S WEERASEKERA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 }
        ]
    },
    "D2408": { // PROF DHAMMIKE SILVA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D0461": { // PROF ISHANI RODRIGO - PAEDIATRICIAN
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D12920": { // PROF J.M CHANDIMA JEEWANDARA - PAEDIATRIC ALLERGOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D6822": { // PROF J.M CHANDIMA JEEWANDARA - ALLERGY AND IMMUNOLOGY
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D6823": { // PROF J.M CHANDIMA JEEWANDARA - ALLERGY SPECIALIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D5784": { // PROF JAGATH N. HERATH - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D0366": { // PROF JAYAMINI SENEVIRATNE - PAEDIATRIC DERMATOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D2386": { // PROF JAYAMINI SENEVIRATNE - DERMATOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D5115": { // PROF M. SATHANANDAN - CONSULTANT IN FERTILITY
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D6097": { // PROF M. SATHANANDAN - REPRODUCTIVE ENDOCRINOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "15:00", end: "15:45", duration: 45 }
        ]
    },
    "D7286": { // PROF M. SATHANANDAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D4714": { // PROF MADURA JAYAWARDANE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [2, 3, 4, 6],
        timeSlots: [
            { start: "10:00", end: "10:45", duration: 45 },
            { start: "10:45", end: "11:30", duration: 45 },
            { start: "11:30", end: "12:15", duration: 45 },
            { start: "16:00", end: "16:45", duration: 45 }
        ]
    },
    "D1751": { // PROF MUDITHA VIDANAPATHIRANA - JUDICIAL MEDICAL OFFICER
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D2396": { // PROF NADEENA JAYASURIYA - ORAL AND MAXILLOFACIAL SURGEON
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D7486": { // PROF PRAMODH CHANDRASINGHE - GENERAL AND COLORECTAL SURGEON
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D2161": { // PROF RAMYA PATHIRAJA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D3760": { // PROF RANDULA RANAWAKA - PAEDIATRIC NEPHROLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D12351": { // PROF RANIL JAYAWARDANA - DIETITIAN AND NUTRITIONIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D4297": { // PROF RANIL JAYAWARDANA - CLINICAL NUTRITIONIST
        workingDays: [2, 3, 4],
        timeSlots: [
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 }
        ]
    },
    "D1644": { // PROF RUWANTHI PERERA - PAEDIATRICIAN
        workingDays: [1, 2, 5, 6],
        timeSlots: [
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "14:30", end: "15:00", duration: 30 }
        ]
    },
    "D2162": { // PROF S.F.L AKBAR - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 3, 5],
        timeSlots: [
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "09:00", end: "10:00", duration: 60 },
            { start: "10:00", end: "11:00", duration: 60 },
            { start: "13:00", end: "14:00", duration: 60 },
            { start: "14:00", end: "15:00", duration: 60 },
            { start: "15:00", end: "16:00", duration: 60 }
        ]
    },
    "D0067": { // PROF SAMAN B. GUNATHILAKE - NEURO PHYSICIAN
        workingDays: [1, 3, 5, 7],
        timeSlots: [
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "08:00", end: "09:00", duration: 60 },
            { start: "17:00", end: "18:00", duration: 60 }
        ]
    },
    "D2150": { // PROF SANATH LANEROLLE - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5],
        timeSlots: [
            { start: "07:30", end: "08:00", duration: 30 },
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 }
        ]
    },
    "D1993": { // PROF SANJEEWA PADUMADASA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "06:00", end: "07:00", duration: 60 },
            { start: "07:00", end: "08:00", duration: 60 },
            { start: "20:00", end: "21:00", duration: 60 }
        ]
    },
    "D1773": { // PROF SARAJI WIJESEKARA - PAEDIATRIC NEUROLOGIST
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D2798": { // PROF T KADOTGAJAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "05:30", end: "06:30", duration: 60 },
            { start: "06:30", end: "07:30", duration: 60 },
            { start: "19:30", end: "20:30", duration: 60 }
        ]
    },
    "D6285": { // PROF THUSHARA MATTHIAS - PHYSICIAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D2118": { // PROF TIRAN DIAS - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "11:30", end: "12:00", duration: 30 },
            { start: "15:00", end: "15:30", duration: 30 },
            { start: "15:30", end: "16:00", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 }
        ]
    },
    "D7119": { // PROF TIRAN DIAS - ANOMALY SCAN
        workingDays: [6, 7],
        timeSlots: [
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "10:30", end: "11:00", duration: 30 },
            { start: "11:00", end: "11:30", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    },
    "D7508": { // PROF TIRAN DIAS - NT - Scan
        workingDays: [5, 6],
        timeSlots: [
            { start: "08:00", end: "08:45", duration: 45 },
            { start: "08:45", end: "09:30", duration: 45 },
            { start: "09:30", end: "10:15", duration: 45 },
            { start: "10:15", end: "11:00", duration: 45 }
        ]
    },
    "D7509": { // PROF TIRAN DIAS - WELL BEING SCAN
        workingDays: [2, 4, 6],
        timeSlots: [
            { start: "09:00", end: "09:45", duration: 45 },
            { start: "09:45", end: "10:30", duration: 45 },
            { start: "10:30", end: "11:15", duration: 45 },
            { start: "11:15", end: "12:00", duration: 45 },
            { start: "14:00", end: "14:45", duration: 45 },
            { start: "14:45", end: "15:30", duration: 45 }
        ]
    },
    "D0905": { // PROF(MS) GUWANI LIYANAGE - PAEDIATRICIAN
        workingDays: [4, 5, 6],
        timeSlots: [
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "13:30", end: "14:00", duration: 30 },
            { start: "18:30", end: "19:00", duration: 30 }
        ]
    },
    "D4719": { // PROF(MS) P. GOWRY SENTHILANATHAN - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4],
        timeSlots: [
            { start: "12:00", end: "12:30", duration: 30 },
            { start: "12:30", end: "13:00", duration: 30 },
            { start: "13:00", end: "13:30", duration: 30 },
            { start: "18:00", end: "18:30", duration: 30 }
        ]
    },
    "D1147": { // PROF(MS) RANI SITHAMBARAMPILLA - OBSTETRICIAN AND GYNAECOLOGIST
        workingDays: [1, 2, 3, 4, 5, 6],
        timeSlots: [
            { start: "08:00", end: "08:30", duration: 30 },
            { start: "08:30", end: "09:00", duration: 30 },
            { start: "09:00", end: "09:30", duration: 30 },
            { start: "09:30", end: "10:00", duration: 30 },
            { start: "10:00", end: "10:30", duration: 30 },
            { start: "16:00", end: "16:30", duration: 30 },
            { start: "16:30", end: "17:00", duration: 30 },
            { start: "17:00", end: "17:30", duration: 30 }
        ]
    }
};

module.exports = availabilitySchedule;
