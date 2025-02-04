import { Tags, ValueType, GroupWithData } from "topics/group";
import { GenerationContext, GenerationFrequency, GroupGenerator } from "topics/group-generator";

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Daily,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
    return [
      {
        name: "ziki-pass-testnets",
        timestamp: context.timestamp,
        data: {
          "github:jflo": 1,
          "0x2bf7b04f143602692bbdc3ecbea68c2c65278eee": 1,
          "0x0B7265f8b7D886317FFde328Ae8c6185BC1523Da": 1,
          "github:shemnon": 1,
          "0x6B703a7FD20efe6F5BADfdd57cc8Ec97FA3A1910": 1,
          "0x00D3BAf1080b1Cfb5897225a21EcdcC25a1F4456": 1,
          "0x3f559454185098cb3A496F864A4BDD82B34c7fD1": 1,
          "github:samcm": 1,
          "github:barnabasbusa": 1,
          "github:savid": 1,
          "0xd334741D0766B257B18f2d058E844E17E346A0C1": 1,
          "github:ralexstokes": 1,
          "0x3b16821a5dbbff86e4a88ea0621ec6be016cd79a": 1,
          "0xb7A593EC62dc447eef23ea0e0B4d5144ac75ABC5": 1,
          "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045": 1,
          "github:casparschwa": 1,
          "0xf70299bdfe1c0C245c7c480D601DfF71267eE88A": 1,
          "0x634C474A393E4498Bc2F0C1DeE16A50E9E0Ebe2b": 1,
          "github:fredriksvantes": 1,
          "0xFBFd6Fa9F73Ac6A058E01259034C28001BEf8247": 1,
          "0x2BcFB00d5AA26919f0F2AF537ba791E429C7856B": 1,
          "github:jtraglia": 1,
          "0x008b3b2F992C0E14eDaa6E2c662Bec549CAA8df1": 1,
          "0x873a45B49289b868E81547c6226357E7117e6070": 1,
          "github:holgerd77": 1,
          "0xf363C519F91E823184061e5BF28263262E2b9B8d": 1,
          "0x5555763613a12D8F3e73be831DFf8598089d3dCa": 1,
          "github:karalabe": 1,
          "0x026E4640EA509D6C6Db7526eDb9F50b529Bf9399": 1,
          "github:s1na": 1,
          "0xecb824d5f77c6a8c2172483bc2765d8e7dc3ef5c": 1,
          "0x46cD90445349e64F895c403c23839e79eb4065e4": 1,
          "github:zsfelfoldi": 1,
          "github:rjl493456442": 1,
          "github:lightclient": 1,
          "github:realbigsean": 1,
          "0x0A9e0A4CfFFC9a7C7DF37D8300e9f79Ad15b986f": 1,
          "github:zedt3ster": 1,
          "0x6B29132ea388a308578c1d3Be068D0e4fc9915a2": 1,
          "0xCa55123Aba844D347D0A18d91a958eDa531447fF": 1,
          "0x68A930369C1BCaded1110fc233314F94A6DFEdFa": 1,
          "github:GregTheGreek": 1,
          "github:dapplion": 1,
          "github:philknows": 1,
          "github:wemeetagain": 1,
          "0x6017D2b9586cbfCD0027eA90205C206e2e8ee079": 1,
          "github:MicahZoltu": 1,
          "0xe968FB773e54f77350A427B057FDB44e6592E338": 1,
          "github:LukaszRozmej": 1,
          "0x644177F8D79117c2b9C7596527642B3c2D05888E": 1,
          "github:smartprogrammer93": 1,
          "0xCf7679904D803aFD9f9f9E62E423a705164CD823": 1,
          "0x71c15691e243be88220957c784053ef0e084440b": 1,
          "github:marcindsobczak": 1,
          "github:cbermudez97": 1,
          "github:jmederosalvarado": 1,
          "github:mratsim": 1,
          "0xdA0DCe962fF7a4c0db2d97909bACF0545e33fDb1": 1,
          "github:etan-status": 1,
          "github:cheatfate": 1,
          "0x6e1d7F30b270e61E571Cf7cAa59EF1A573321b0a": 1,
          "0x4C0a466DF0628FE8699051b3Ac6506653191cc21": 1,
          "github:timbeiko": 1,
          "github:prestonvanloon": 1,
          "0x046Fb65722E7b2455012BFEBf6177F1D2e9738D9": 1,
          "0xf0443945ad3be9645382fc2537317da97feff3a9": 1,
          "0x3212974a4E53E5238f6ea193B36412Db9AD61c26": 1,
          "0x6ffd2248ab7e80ef51d7eb4cb60964c830125567": 1,
          "github:rkapka": 1,
          "0x54811965A474fF541F5eDf6C282bF9e939aCBc1b": 1,
          "github:potuz": 1,
          "github:lucassaldanha": 1,
          "github:ajsutton": 1,
          "github:mehdi-aouadi": 1,
          "0x376D5C3a16E9d015e8C584bB2d278E25F0ccb27B": 1,
          "github:rolfyone": 1,
          "0x68a01CA79685447b0bF32b1aca7C515448eb98B5": 1,
          "0x13abA75D11AB2E90Cd30C0622bfA412EC849B39e": 1,
          "0x975D1040E93316917BD67dD32a02e1929F8aF8D3": 1,
          "0x153afFb96Fcb60085Ee307996Bdd2df0183A3682": 1,
          "0x2fb858991668840ce34F331402E0b3C66db078AF": 1,
          "0x22D6637330aF1de97a1F67D03A73b99A1E6D2263": 1,
          "github:rauljordan": 1,
          "0x054BF7B12d38eCd382b6A80f5E2b8Af437a339C4": 1,
          "0x8360470F1793C91c953be453fcA52CC63dfCb367": 1,
          "github:macladson": 1,
          "0xa42841f25E64B12917C867EA906E20269F5C0D1d": 1,
          "github:StefanBratanov": 1,
          "github:skylenet": 1,
          "0xA3fD150da53b9B6F65eBb8210552DA9d56c32Bec": 1,
          "0x9938065bb2192678ecc2b3500f64fcba4882969d": 1,
          "github:tersec": 1,
          "github:Menduist": 1,
          "github:acolytec3": 1,
          "github:flcl42": 1,
          "github:zah": 1,
          "github:djrtwo": 1,
          "0x2f7384aD20392Cc22263F83001eA67320Ec4C3e7": 1,
          "github:matkt": 1,
          "0xc577b071a2CBe812C44dB125A87f66D08301C200": 1,
          "0x915AA445720020EB1A59151E831111369B08e118": 1,
          "github:luca-zanolini": 1,
          "github:tbenr": 1,
          "github:protolambda": 1,
          "0x6848518Ed95e7Ac7Da4951681CdeC190FcdC4aC5": 1,
          "0xe019836A41CB707F79b991f60e241918097aC16e": 1,
          "0x198DbC9A9879d398Bcacf139D8c130C466e272Af": 1,

          // This badge is only used for testing
          // We add Sismo Core Team addresses in the group
          // for testing-purposes only

          "github:yum0e": 1,
          "github:Baoufa": 1,
          "github:CharlsCharls": 1,
          "github:dhadrien": 1,
          "github:gabin54": 1,
          "github:GrandSchtroumpf": 1,
          "github:jragosa": 1,
          "github:leosayous21": 1,
          "github:MartinGbz": 1,
          "github:nicolas-geniteau": 1,
          "twitter:f9s216": 1,
          "github:0xsalty": 1,
          "github:teroho4981": 1,
        },
        valueType: ValueType.Score,
        tags: [Tags.User],
      },
    ];
  },
};

export default generator;
