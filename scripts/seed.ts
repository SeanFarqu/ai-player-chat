const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Toronto Maple Leafs"},
                { name: "Ottawa Senators"},
                { name: "Montreal Canadiens"},
                { name: "Winnipeg Jets"},
                { name: "Calgary Flames"},
                { name: "Edmonton Oilers"},
                { name: "Vancouver Canucks"},
                { name: "Seattle Kraken"},
                { name: "Anaheim Ducks"},
                { name: "Los Angeles Kings"},
                { name: "San Jose Sharks"},
                { name: "Vegas Golden Knights"},
                { name: "Arizona Coyotes"},
                { name: "Colorado Avalanche"},
                { name: "Florida Panthers"},
                { name: "Tampa Bay Lightning"},
                { name: "Carolina Hurricanes"},
                { name: "Boston Bruins"},
                { name: "New York Rangers"},
                { name: "New York Islanders"},
                { name: "New Jersey Devils"},
                { name: "Philadelphia Flyers"},
                { name: "Nashville Predators"},
                { name: "Columbus Blue Jackets"},
                { name: "Pittsburgh Penguins"},
                { name: "Minnesota Wild"},
                { name: "Dallas Stars"},
                { name: "St. Louis Blues"},
                { name: "Chicago Blackhawks"},
                { name: "Detroit Red Wings"},
                { name: "Washington Capitals"},
                { name: "Buffalo Sabres"},

            ]
        })
    } catch (error) {
        console.error("Error sending default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main()