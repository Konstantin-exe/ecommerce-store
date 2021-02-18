import postgres from 'postgres';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('dotenv-safe').config();
// export function getItemInfo() {
//   return [
//     {
//       id: '0',
//       itemName: 'Teleporter',
//       price: 1000000,
//       quantity: 1,
//       imgUrl: '/img/portalgun.png',
//       shortDescription:
//         'The Portal Gun is a gadget that allows the user(s) to travel between different universes/dimensions/realities.',
//       longDescription:
//         "The Gun was likely created by a Rick, although it is unknown which one; if there is any truth to C-137's fabricated origin story, then he may not be the original inventor. The device was destroyed by a Gazorpazorp in Raising Gazorpazorp and as result, Summer and Rick had to return to Earth via space craft. Rick made a replacement one, but that one was destroyed when Rick rigged it to explode during the battle between Federation agents and the wedding guests at Birdperson's wedding reception in The Wedding Squanchers.Another portal gun was found by Summer in The Rickshank Rickdemption when she unearthed the corpse of the Rick that was killed in the replacement dimension but that gun was destroyed by the Jerry Smith that lived in the cronenberged dimension. Given the fact that Tammy Gueterman demanded that the portal gun was not to be damaged when she demanded that Rick drop it, combined with the fact that the Galactic Federation set the brainalyzer in Rick to get the details on how to build the gun strongly implies that the Galactic Federation wanted to use Rick's portal gun design for their own personal use and that the reasons for it were probably so that the Federation could expand their control into other dimensions.",
//     },

//     {
//       id: '1',
//       itemName: 'Meeseek Box',
//       price: 5500,
//       quantity: 695,
//       imgUrl: '/img/Meeseek-Box.png',
//       shortDescription:
//         'The Mr. Meeseeks Box is a gadget that creates a Mr. Meeseeks for the purpose of completing one given objective.',
//       longDescription:
//         "Meeseeks are creatures who are created to serve a singular purpose for which they will go to any length to fulfill. After they serve their purpose, they expire and vanish into the air. Their motivation to help others comes from the fact that existence is painful to a Meeseeks, and the only way to be removed from existence is to complete the task they were called to perform. Physical violence or damage cannot eliminate them, with multiple Meeseeks in the episode sustaining severe head trauma (to the point of having entire sections of their heads caved in and their eyes popping out of their sockets) or bodily mutilation (limbs ripped off, bones broken, multiple lacerations, strangulation, severe blunt force trauma) while still being fully conscious and physically functioning. The first Meeseeks spawned attributed this invulnerability to their being unable to die until their purpose is fulfilled, whether this means it is completely, physically impossible to kill a Meeseeks or whether they simply didn't have the means on Earth to cause enough damage to their bodies that there wouldn't be anything left to function is unclear. They typically live for no more than a few hours, and thus two days is an eternity for Meeseeks. The longer the Meeseeks stay alive, the more sanity they begin to lose. Rick warns the Smith family to keep their tasks simple. If a Meeseeks is not given a purpose at the beginning of its existence it seems to default to taking the purpose of the Meeseeks before it. This is seen when a Meeseeks created for Jerry created another Meeseeks then ordered it to kill another Meeseeks it was in argument with which the resultant Meeseeks attempted to avail. The Meeseeks then wildly began pressing the box without giving orders and all the resulting Meeseeks began trying in vain to kill the rest of the Meeseeks.",
//     },

//     {
//       id: '2',
//       itemName: 'Mega Seed',
//       price: 12599,
//       quantity: 16,
//       imgUrl: '/img/Mega_Seed.png',
//       shortDescription:
//         'They are found inside the fruit of the Mega Trees in Dimension 35-C.',
//       longDescription:
//         "Mega Seeds are large, brown, and teardrop-shaped. Their surface is wrinkled in a fashion similar to walnuts, additionally, they sport small bristles and tiny bumps all over. While Rick doesn't disclose all of the properties of these seeds, it is likely they are considered contraband material, as he needs Morty to hide them in his rectum to try to sneak them through interdimensional customs. Morty reasonably complains that they are pointy and they hurt, Rick states that that indicates they are good ones. Their only known property is the ability to endow a person with super-intelligence when dissolved in person's anal cavity, a trait which Rick uses to manipulate Beth and Jerry into thinking he is helping Morty tap into his hidden genius. After a short period of time, the super-intelligence wears off and the seed instead causes loss of motor and brain function for several days. There are different variants of mega seed. These include the Attack Mega Seed, Defense Mega Seed, Speed Mega Seed, and Level Up Mega Seed. These are most likely grown in the Citadel, as they appear to be genetically modified. These Mega Seeds increase the physical capability of an individual.",
//     },

//     {
//       id: '3',
//       itemName: 'Plumbus',
//       price: 99,
//       quantity: 1000000,
//       imgUrl: '/img/plumbus.png',
//       shortDescription:
//         'A Plumbus is an all-purpose home device. Everyone knows what it does, so there is no reason to explain it.',
//       longDescription:
//         'A Plumbus is an all-purpose home device. Everyone knows what it does, so there is no reason to explain it. It is described as a common household and office item that is also used as an accent piece to a room. According to Stealy, Plumbuses are worth six-and-a-half Brapples. Plumbuses are created on Plumbubo Prime 51b. They use Mortys for maintenance and other menial tasks. Known employees are Plumbus Slave Morty, Plumbus Worker Morty, Plumbus Master Morty, Plumbus Prawn Morty, and Plumbonia Morty. Working in a factory is very dangerous for a Morty. Repurposed Fleeb Juice, combined with tight spaces, can cause a Morty/Alien hybrid such as Plumbonia Morty. Morty/Plumbus protein strands can cause mutations to occur in Mortys such as Plumbus Prawn Morty. In Rick and Morty: Virtual Rick-ality, Rick has a Plumbus in the garage. The Plumbus can be combined with other items to create different colors of Plumbus. One of the aliens that work at the plumbus factory are Blamphs, and another is a Shlaammi.',
//     },

//     {
//       id: '4',
//       itemName: 'Super Suit',
//       price: 67120,
//       quantity: 2,
//       imgUrl: '/img/Super_Suit.png',
//       shortDescription:
//         'The Power armor or Purge suits, were built by Rick as a fail-safe device',
//       longDescription:
//         'These suits, also called the Power armor or Purge suits, were built by Rick as a fail-safe device in case of multiple contingency scenarios (i.e. getting stranded on an hostile world without his Portal Gun/Space Ship) as an FTL automatized small pod, able to deploy up to two suits. Once deployed, it can rocket itself through space from planet to planet to meet its user and then uses a yellow energy beam to materialize the suit over the wearer. The Combat Suit is a full body armor (except for the face) that protects the user from basic contusion/cutting weapons, as well as enhances the users strength and resilience to inhuman levels. This allows a user to be completely unfazed by attacks, as Morty was surrounded and struck on all sides without being hurt at all. In addition, the suits inhuman strength allows a user to effortlessly break, rip and tear through bone, rock, and flesh, as Rick, Morty and Arthricia literally tore through the bodies of any one that they fought, rending many of their victims a mere bloody pulp or multilated husks. The suits also include missiles, energy guns that cause bloody wounds, a flame thrower mounted on the wrist, a non lethal electrical blast that knocks a target unconscious for hours, arm mounted melee blades and buzzsaws, a rocket propulsion system on the boots, the exhaust of which can be weaponized, and a Music System with speakers on the shoulders.',
//     },
//     {
//       id: '5',
//       itemName: 'Butter Robot',
//       price: 6100,
//       quantity: 10,
//       imgUrl: '/img/Butter_Robot.png',
//       shortDescription:
//         'The Butter Robot is a small, two armed, mobile, sentient robot Rick Sanchez created for the sole purpose of passing butter.',
//       longDescription:
//         'Upon its creation, it asks Rick, "What is my purpose?", in response, Rick tells it to pass the butter. Moments after completing its task, the Robot repeats, "What is my purpose?" Rick clarifies that it passes butter. It looks down realizing its sole reason for existence is for something so mundane and says "Oh my god." Rick responds "Yeah, welcome to the club, pal." Later on, while Rick is dining alone, the Robot passive-aggressively slams a whole stick of butter in Ricks food tray, then spurns his offer to see a movie by answering: "I am not programmed for friendship." The Butter Robot returns in a Rick and Morty commercial for Old Spice, and is tossed around, and eventually eaten, and damaged by three giant anthropomorphic Old Spice spray cans - this example is damage free tough!',
//     },
//     {
//       id: '6',
//       itemName: 'Gwendolyn',
//       price: 550,
//       quantity: 10359,
//       imgUrl: '/img/Gwendolyn_Doll.png',
//       shortDescription:
//         'Gwendolyn is a sex robot originally from  a pawn shop in outer space.',
//       longDescription:
//         'The robot produces Gazorpian offspring, and is made by female Gazorpazorps to sustain the population. They are sent out to have intercourse with male Gazorpians and then sent back to their base to "give birth". If the offspring is female, they will take care of it and raise it properly. If the offspring is male, they will abandon them outside, because of their destructive behaviour, or as they call it, they "get to play outside".',
//     },
//     {
//       id: '7',
//       itemName: 'Microverse Battery',
//       price: 520000,
//       quantity: 2,
//       imgUrl: '/img/Microverse_Battery.png',
//       shortDescription:
//         'The Microverse Battery is a gadget developed by Rick to supply power to his flying ship.',
//       longDescription:
//         'The Microverse Battery contains a miniature universe with a planet inhabited by intelligent life. These lifeforms use kinetic devices, which were given to them by Rick, to produce electricity. Under the guise of "waste power" a majority of the energy produced is extracted by Rick to power his ship. The people of this world consider Rick to be a benevolent alien, when in fact, he is using them as slaves. Trouble occurs when a scientist in this miniature world, Zeep Xanflorp, invents his own Microverse Battery (which he calls a Miniverse) to provide his people with energy, thus making the kinetic devices Rick installed obsolete. Rick describes creating a "spatially tessellated void inside a modified temporal field", while Zeep Xanflorp describes his Miniverse as an "unbounded vacuum inside a temporal field". The temporal fields of the Miniverse and Teenyverse are known to speed up time inside the universes relative to the outside, but this is unclear in the case of the Microverse. ',
//     },

//     {
//       id: '8',
//       itemName: 'A Pickle',
//       price: 0,
//       quantity: 0,
//       imgUrl: '/img/pickle.png',
//       shortDescription: 'Its just a pickle...',
//       longDescription: '???',
//     },
//   ];
// }

const sql = postgres();

await sql`SELECT * FROM shop_items`;

export async function getShopItems() {
  const items = await sql`SELECT * FROM shop_items`;
  console.log(items);

  return items;
}

getShopItems();
