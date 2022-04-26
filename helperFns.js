const filterFetchedRecords = (fetchedRecords, existingRecords) => {
  const existingRecordsIds = existingRecords.map((rec) => rec.getro_id);
  const filteredRecords = fetchedRecords.filter(
    (newRec) => !existingRecordsIds.includes(newRec.id)
  );
  return filteredRecords;
};
module.exports = { filterFetchedRecords };
