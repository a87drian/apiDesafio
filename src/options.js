const PRODUCTOS = 'mongodb';
const CARRITOS = 'firestore'
const optionsMysql = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3307,
        user: 'root',
        password: '',
        database: 'testdb'
    },
    pool: {
        min: 0,
        max: 7
    }

};
const optionsSqlite = {
    client: 'sqlite3',
    connection: {
        filename: './ecommerce.sqlite3'
    },
    useNullAsDefault: true
};
const mongodb = {
    host: 'mongodb://localhost/ecommerce',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }

};
const firestore = {
    type: "service_account",
    project_id: "ecommerce-1c4a9",
    private_key_id: "2b37302d782ac244d31929aa762fa67f03ef3b45",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC77JsyZYUF+Eaw\nT2tBnjW7pQ3ZANVmzOu53aKn08Iq/2fySVYbq3ZFg/Xv92Ncu8tTB06f8x3W7YWU\nGM4u5Jh43r35v3EI5EvLNbZSE6CsfXQIkYZftTw9+v2YVHwIUH+7S45ejqNikVTX\ntySMYIw/aMa3RiEULmRAvRmFAQIKYTfMvsPvoUmHQA1KUnJr4HrggCaN57+9dMxN\nifl1oqvh2nX+3BXES0hf9cVj5B2DsUtYUr38HC9Yi7Ui/Yd/sCoSO5kdyCblHP9p\nUJdGcTCaHKh5A9NtA+NvfAxx8uhko550dPdKW1g32sIqINuTp2l+6dxO4ih7SJ+Q\nHmOqlgwHAgMBAAECggEAHDZ+akeBfA71Fd0mfhhxerVh6dVNNHzJWwMiO034VZo4\nkdBexBKu0+rmzlr2qOJsuQ9cx3ipXy4TotNCiRm6plLSdJ9AKhSUKHLs50+ZDKxc\n8jhe0xmTbL60udzdLiZfts+2FQ4XC2JEOYp+SzDnfVGOm89EghIg7PM21Jf9JW+G\nbmqOEUMmtSgclTosqDKDlwWrGnICQL1Cx8JAoadP4RY8A1B86d5CaBIzoHhUqVBp\nTiEUtUysIeWoEZHS45CNtceeAjPj2145IRuQsScpA4cg611FwPDiHKF68Yv9USMZ\nSrK9KcaBNIwdkcFXQCiwKKN51T6UkQe6WIlUc1vgYQKBgQD+APmP21HgXuzq13ee\nwPCKw3Wfg7BnfWnP9O0O2JyeUsnZ5/2c83IWnH5vS1s+D55FGSlLu2GWXlsoqobb\nU7Sne4B1YCaxBok/zW8fISuBgsBsUaKUXiEjNxV/EYEsoUiRk4YYipS/rR0UGqfK\nBIVrEmSsT3DnHxIDo+Pn74DfcQKBgQC9Zq/u861DAXu0bpFnjKw+Bq8lVgGfoGdQ\nNF4mEar5ElPJtlNrxWVF5MEo6NfWOdeUw6Pele5P2W/1KizsTF1O2sMOC7CnZxij\n3TjfPWVEPV7F7+cO+DuT+YyuV4wsFVs/Tv4ER/D7LaMPPpHJUVA/R9EtK0YETdE0\nIGD3MtbW9wKBgQChKh8vHvrJgZGTxJlaupMliLWmO9l/IL01vPN5OwnNDzySLbfm\nkTUvkaZLmaXQL/q9XySrr75QuZffqqucmHUE28D7OMH0CvCk8gVy3AoNx9euIvIk\nb8FY5ceW85VhqwgvjkpEYhHVuNK9gdg6vzmkYWxNRK6fh0BX3PJrpLTBkQKBgAHH\nvU+Zqr8+fFMt1uAKSnQqy+ql7E37y/zNATWKZPkCWxdCR3Zz3IfTpp0j0yOIV6Zm\nUFv/PMYzXQII63MtJJNhKwQux/JK3chsg+RVR2ZkzUc/AgT6AFVbux7IY+DmMn1d\n2LVhl7pEq4uxIt2pjf+KRUUPaxEPSjAbPc4VBD/xAoGAJCS8tyiA9R2uOuJGsV7y\nzVm0uGgd47+70dB+y8fl40dz1bY52Uv+kb1M8Uh4ICu7J83OBKXP2a/8bNM7kXla\nmO26RS+ha0aeqAm+AJfB/ubQv/vAZxirIrBARsaggxV1ZnFbGnlCEOTIWzaazGsm\nOcznO/ANEyGrZeQyyRQB73U=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-nybps@ecommerce-1c4a9.iam.gserviceaccount.com",
    client_id: "101774952302936741959",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nybps%40ecommerce-1c4a9.iam.gserviceaccount.com"
};

module.exports = {
    optionsMysql,
    optionsSqlite,
    mongodb,
    firestore,
    PRODUCTOS,
    CARRITOS
};