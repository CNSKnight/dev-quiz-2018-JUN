const ns = {};
ns.badgeArray = [
    {
        game: "Royal Ruckus",
        badges: ["Approximate Beatdown", "Huge Money", "Taste the Rainbow", "Done & Dungeon", "Let's Rage"]
    },
    {
        game: "Cake's Tough Break",
        badges: ["Nip It!", "Yay BMO!", "One Fast Cat", "Hang In There, Baby", "Piece of Cake", "Super Amadeus"]
    },
    {
        game: "Lemon Break",
        badges: ["Lemon Aid", "Sweet Kicks", "BMO Hope", "Elephant Prowess", "Unacceptable Escape"]
    },
    {
        game: "Finn & Bones",
        badges: ["Rock Family Tree", "Clash of Bones", "Chemistry 101", "Mix Master", "Kiss of Death"]
    }
];

ns.tabs = [];
ns.panels = [];
ns.badgeArray.forEach((item, idx) => {
    ns.tabs[idx] = `<li><a href="#stdPanel" data-index="${idx}">${item.game}</a></li>`;
});

ns.loadPanel = function (idx) {
    if (!this.panels[idx]) {
        var game = this.badgeArray[idx].game;
        var badges = this.badgeArray[idx].badges.reduce((mrkp, badge) => {
            return (mrkp += `<li><span>${badge}</span></li>`);
        }, '');
        this.panels[idx] = `<h4>${game}</h4><ul class="badgesLstng browser-default">${badges}</ul>`;
    }
    this.panel.innerHTML = this.panels[idx];
}

window.onload = function () {
    ns.lstng = document.querySelector('#badges .gamesLstng ul');
    ns.panel = document.querySelector('#badges .stdPanel');

    if (!ns.lstng || !ns.panel || !ns.tabs.length) {
        return;
    }

    ns.lstng.innerHTML = ns.tabs.join("\n");
    ns.lstng.addEventListener('click', function (e) {
        e.stopPropagation();
        var idx = e.target.dataset.index;
        if (idx !== undefined) ns.loadPanel(idx);
    });

};