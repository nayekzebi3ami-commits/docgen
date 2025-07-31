import { Validators } from "@angular/forms";


interface FormField {
    name?: string;
    label: string;
    type: 'text' | 'date' | 'select' | 'textarea' | 'section-header'; // Ajout de 'section-header'
    options?: Array<{ value: string, label: string, template?: string }>;
    validators?: Validators[];
    uppercase?: boolean;
    getTemplate?: (value: string) => string;
}

export const FORM_DEFINITIONS_CUSTOM = {
    cheque_bancaire: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        {
            name: 'typeSociete',
            label: 'Type de société',
            type: 'select',
            options: [
                { value: 'SARL', label: 'SARL (Société à Responsabilité Limitée)' },
                { value: 'EURL', label: 'EURL (Entreprise Unipersonnelle à Responsabilité Limitée)' },
                { value: 'SA', label: 'SA (Société Anonyme)' },
                { value: 'SAS', label: 'SAS (Société par Actions Simplifiée)' },
                { value: 'SASU', label: 'SASU (Société par Actions Simplifiée Unipersonnelle)' },
                { value: 'SNC', label: 'SNC (Société en Nom Collectif)' },
                { value: 'SCI', label: 'SCI (Société Civile Immobilière)' },
                { value: 'SCOP', label: 'SCOP (Société Coopérative et Participative)' },
                { value: 'SCP', label: 'SCP (Société Civile Professionnelle)' },
                { value: 'Entreprise individuelle', label: 'Entreprise individuelle' },
                { value: 'Auto-entrepreneur', label: 'Auto-entrepreneur' },
                { value: 'EIRL', label: 'EIRL (Entreprise Individuelle à Responsabilité Limitée)' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomSociete', label: 'Nom de la société', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueSociete', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueSociete', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueSociete', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalSociete', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villeSociete', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_super_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nomRecepteur', label: 'Nom du récepteur', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueRecepteur',
            label: 'Banque du récepteur',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_de_banque: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nomRecepteur', label: 'Nom du récepteur', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueRecepteur',
            label: 'Banque du récepteur',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    carte_identite: [
        { type: 'section-header', label: '1. Informations (voulu sur le document)' } as FormField,

        { name: 'nom', label: 'Veuillez saisir le nom voulu', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Indiquez le prénom voulu', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Indiquez votre date de naissance voulu', type: 'date', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sélectionnez le sexe voulu', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' }
            ], validators: [Validators.required]
        },
        {
            name: 'nationalite',
            label: 'Sélectionnez la nationalité du document que vous souhaitez obtenir',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'lieuNaissance', label: 'Indiquez la ville de naissance voulu', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Veuillez indiquer la taille en centimètres voulu', type: 'text', validators: [Validators.required] },

        { type: 'section-header', label: '2. Coordonnées et adresse (voulu sur le document)' } as FormField,

        { name: 'numeroRuePostale', label: 'Indiquez le numéro de l\'adresse', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Choisissez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Indiquez le nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Saisissez le code postal de l\'adresse', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Indiquez la ville ou la commune de l\'adresse', type: 'text', validators: [Validators.required] },

        { type: 'section-header', label: '3. Informations de contact' } as FormField,

        { name: 'pseudoReseau', label: 'Numéro Whatsapp (Le suivie du dossier se fera sur whatsapp veuillez saisir votre numero associé)', type: 'text', validators: [Validators.required] },
    ],
    permis: [
        { type: 'section-header', label: '1. Informations (voulu sur le document)' } as FormField,

        { name: 'nom', label: 'Veuillez saisir le nom voulu', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Indiquez le prénom voulu', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Indiquez votre date de naissance voulu', type: 'date', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sélectionnez le sexe voulu', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' }
            ], validators: [Validators.required]
        },
        {
            name: 'nationalite',
            label: 'Sélectionnez la nationalité du permis que vous souhaitez obtenir',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'lieuNaissance', label: 'Indiquez la ville de naissance voulu', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Veuillez indiquer la taille en centimètres voulu', type: 'text', validators: [Validators.required] },

        { type: 'section-header', label: '2. Coordonnées et adresse (voulu sur le document)' } as FormField,

        { name: 'numeroRuePostale', label: 'Indiquez le numéro de l\'adresse', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Choisissez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Indiquez le nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Saisissez le code postal de l\'adresse', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Indiquez la ville ou la commune de l\'adresse', type: 'text', validators: [Validators.required] },
        { name: 'prefectureSouhaitee', label: 'Préfecture de délivrance du permis souhaité', type: 'text', validators: [Validators.required] },
        {
            name: 'permisSouhaite',
            label: 'Catégorie du permis souhaité',
            type: 'select',
            options: [
                { value: 'AM', label: 'AM' },
                { value: 'A1', label: 'A1' },
                { value: 'A2', label: 'A2' },
                { value: 'A', label: 'A' },
                { value: 'B1', label: 'B1' },
                { value: 'B', label: 'B' },
                { value: 'C1', label: 'C1' },
                { value: 'C', label: 'C' },
                { value: 'D1', label: 'D1' },
                { value: 'D', label: 'D' },
                { value: 'Be', label: 'Be' },
                { value: 'C1E', label: 'C1E' },
                { value: 'Ce', label: 'Ce' },
                { value: 'D1e', label: 'D1e' },
                { value: 'De', label: 'De' }
            ],
            validators: [Validators.required]
        },

        { type: 'section-header', label: '3. Informations de contact' } as FormField,

        { name: 'pseudoReseau', label: 'Le suivie du dossier ce fera sur whatsapp veuillez saisir votre numéro whatsapp', type: 'text', validators: [Validators.required] }
    ],
    passeport: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité du passeport souhaité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
    ],
    visa: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
    ],
    amende: [
        { type: 'section-header', label: '1. Informations personnelles (qui sont présent sur la contravention)' } as FormField,

        { name: 'pseudoReseau', label: 'Numéro Whatsapp (Le suivie du dossier se fera sur whatsapp veuillez saisir votre numero associé)', type: 'text', validators: [Validators.required] },

        { name: 'nom', label: 'Veuillez saisir le nom figurant sur la contravention', type: 'text', validators: [Validators.required] },

        { name: 'prenom', label: 'Indiquez le prénom figurant sur la contravention', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Sélectionnez la nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Indiquez la date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Indiquez la ville où vous êtes né(e)', type: 'text', validators: [Validators.required] },

        { type: 'section-header', label: '2. Coordonnées et adresse (qui sont présent sur la contravention)' } as FormField,


        { name: 'numeroRuePostale', label: 'Indiquez le numéro de l\'adresse', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Indiquez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Indiquez le nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Saisissez le code postal de l\'adresse', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Saisissez la ville de l\'adresse', type: 'text', validators: [Validators.required] },

        { type: 'section-header', label: '3. Informations liées à la contravention et permis de conduire' } as FormField,

        { name: 'numeroPermis', label: 'Veuillez saisir le numéro de votre permis de conduire', type: 'text', validators: [Validators.required] },
        { name: 'numeroContravention', label: 'Indiquez le numéro de la contravention', type: 'text', validators: [Validators.required] },
        { name: 'dateContravention', label: 'Indiquez la date de la contravention', type: 'date', validators: [Validators.required] }
    ],
    pare_brise: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'marque', label: 'Marque du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'modele', label: 'Modèle du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'immatriculation', label: 'Numéro d\'immatriculation du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'kilometrage', label: 'Kilométrage du véhicule', type: 'text', validators: [Validators.required] },
    ],
};