export default function SetUsecase() {
  return {
    getAllSetWithRoomId(roomId: string) {},
    getBySetId(id: string) {
      const setId = req.params.setId;

      try {
        const result = await MatchSetDB.findOne({ _id: setId });
        if (result) {
          return res.json({
            roomId: result.roomId,
            setId: result._id,
            teamName: result.setName,
            courtNumber: result.courtNumber,
            allTeam: result.allTeam,
            winScore: result.winScore,
            teamLimit: result.teamLimit,
            winStreak: result.winStreak,
          });
        }
        return res.json(500);
      } catch (e) {
        console.log(e);
        res.json(500);
      }
    },
  };
}
